module Mdc.Enhance.Ripple
  exposing
  ( addRipple
  , Bounding (..)
  , update
  )


import Dict
import Json.Decode as Json exposing (field, at)

import Mdc.Types exposing (..)
import Mdc.Enhance.Dom exposing (..)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (..)
import Mdc.Style exposing (Mode, Mode (..))


{-|
 -}
type Bounding
    = Bounded
    | Unbounded


type alias Durations =
    { active_opacity_duration_ms : Int
    , fg_transform_delay_ms : Int
    , min_opacity_duration_ms : Int
    , opacity_duration_divisor : Int
    , unbound_transform_duration_ms : Int
    }


durations : Durations
durations =
  { fg_transform_delay_ms = 80
  , opacity_duration_divisor = 3
  , active_opacity_duration_ms = 110
  , min_opacity_duration_ms = 200
  , unbound_transform_duration_ms = 200
  }


root : String
root = "mdc-ripple"


upgraded : String
upgraded = root ++ "-upgraded"


type alias CssClasses =
    { bg_active : String
    , bg_bounded_active_fill : String
    , fg_bounded_active_fill : String
    , fg_unbounded_activation : String
    , fg_unbounded_deactivation : String
    , root : String
    , surface : String
    , unbounded : String
    }


cssClasses : CssClasses
cssClasses =
  { root = upgraded
  , surface = root ++ "-surface"
  , unbounded = upgraded ++ "--unbounded"
  , bg_active = upgraded ++ "--background-active"
  , bg_bounded_active_fill = upgraded ++ "--background-bounded-active-fill"
  , fg_bounded_active_fill = upgraded ++ "--foreground-bounded-active-fill"
  , fg_unbounded_activation = upgraded ++ "--foreground-unbounded-activation"
  , fg_unbounded_deactivation = upgraded ++ "--foreground-unbounded-deactivation"
  }


type alias Strings =
    { animation_end_event : List String
    , transition_end_event : List String
    , var_fg_approx_xf : String
    , var_fg_size : String
    , var_fg_unbounded_opacity_duration : String
    , var_fg_unbounded_transform_duration : String
    , var_left : String
    , var_surface_height : String
    , var_surface_width : String
    , var_top : String
    , var_xf_origin_x : String
    , var_xf_origin_y : String
    }


strings : Strings
strings =
  { var_surface_width = "--" ++ root ++ "-surface-width"
  , var_surface_height = "--" ++ root ++ "-surface-height"
  , var_fg_size = "--" ++ root ++ "-fg-size"
  , var_fg_unbounded_opacity_duration = "--" ++ root ++ "-fg-unbounded-opacity-duration"
  , var_fg_unbounded_transform_duration = "--" ++ root ++ "-fg-unbounded-transform-duration"
  , var_left = "--" ++ root ++ "-left"
  , var_top = "--" ++ root ++ "-top"
  , var_xf_origin_x = "--" ++ root ++ "-xfo-x"
  , var_xf_origin_y = "--" ++ root ++ "-xfo-y"
  , var_fg_approx_xf = "--" ++ root ++ "-fg-approx-xf"
  , animation_end_event = ["webkitAnimationEnd", "animationend"]
  , transition_end_event = ["webkitTransitionEnd","transitionend"]
  }


{-|
 -}
defaultClasses : Bounding -> List (Property msg)
defaultClasses bounding =
  case bounding of
      Bounded ->
        [ class cssClasses.surface
        , class cssClasses.root
        ]
      Unbounded ->
        [ class cssClasses.surface
        , class cssClasses.root
        , class cssClasses.unbounded
        ]


geometryDecoder : Json.Decoder DomState
geometryDecoder =
  Json.map6 DomState
    (field "currentTarget" Mdc.Enhance.Dom.boundingClientRect)
    (Json.maybe (field "clientX" Json.float))
    (Json.maybe (field "clientY" Json.float))
    (Json.maybe (at [ "touches", "0", "clientX" ] Json.float))
    (Json.maybe (at [ "touches", "0", "clientY" ] Json.float))
    (field "type" Json.string)


onDown : String -> String -> (Msg -> msg) -> Property msg
onDown id name msg =
    Mdc.Html.Events.on name (Json.map ((Down id) >> Ripple >> msg) geometryDecoder)


onUp : String -> String -> (Msg -> msg) -> Property msg
onUp id name msg =
    Mdc.Html.Events.on name (Json.succeed (msg <| Ripple <| Up <| id))


addRipple : String -> Bounding -> Mode -> Model -> (Msg -> msg) -> Property msg
addRipple id bounding mode model msg =
  let
      defClasses =
          defaultClasses bounding

      classes =
          case mode of
              Normal ->
                  defClasses
              Primary ->
                  defClasses ++ [ class "mdc-ripple-surface--primary" ]
              Accent ->
                  defClasses ++ [ class "mdc-ripple-surface--accent" ]

      attr =
          [ onUp id "touchstart" msg
          , onDown id "touchend" msg
          , onDown id "pointerdown" msg
          , onUp id "pointerup" msg
          , onDown id "mousedown" msg
          , onUp id "mouseup" msg
          , onDown id "keydown" msg
          , onUp id "keyup" msg
          --, Attribute << onFocus     <| focus --setRipple id model msg False
          --, Attribute << onBlur      <| blur  --setRipple id model msg False
          ] ++ classes
  in
      case Dict.get id model.ripple of
          Nothing ->
            Many <| attr
          Just ripple ->
              if ripple.isActivated then
                  Many <| attr ++ [ class cssClasses.bg_active ]
              else
                  Many <| attr
--            case rippled of
--                True ->
--                  Many <| attr
--                False ->
--                  Many <| attr







update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Ripple rippleMsg ->
            case rippleMsg of
                Up id ->
                    (model, Cmd.none)
                Down id domState ->
                    (setActivated id model, Cmd.none)
        _ ->
            (model, Cmd.none)


setActivated : String -> Model -> Model
setActivated id model =
    case Dict.get id model.ripple of
        Nothing ->
            { model | ripple = Dict.insert id { isActivated = True } model.ripple }
        Just ripple ->
            { model | ripple = Dict.remove id model.ripple |> Dict.insert id { ripple | isActivated = True } }
