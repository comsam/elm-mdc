module Mdc.Enhance.Ripple
  exposing
  ( addRipple
  , Bounding (..)
  , update
  )


import Dict
import Json.Decode as Json exposing (field, at)

import Mdc.Types exposing (Msg, Payload, Model)
import Mdc.Enhance.Dom exposing (..)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (..)
import Mdc.Style exposing (Mode, Mode (..))


type RippleMsg
  = Down DomState
  | Up
  | Tick

{-|
 -}
type Bounding
  = Bounded
  | Unbounded


type alias DomState =
  { rect : Mdc.Enhance.Dom.Rectangle
  , clientX : Maybe Float
  , clientY : Maybe Float
  , touchX : Maybe Float
  , touchY : Maybe Float
  , type_ : String
  }


durations =
  { fg_transform_delay_ms = 80
  , opacity_duration_divisor = 3
  , active_opacity_duration_ms = 110
  , min_opacity_duration_ms = 200
  , unbound_transform_duration_ms = 200
  }


root = "mdc-ripple"


upgraded = root ++ "-upgraded"


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


update : Payload -> Model -> (Model, Maybe Msg)
update msg model =
  (model, Nothing)




{-
onDown : String -> Property Ripple
onDown =
  onDown_ identity


onDown_ : (Ripple -> m) -> String -> Property m
onDown_ f name =
  Attribute << Mdc.Html.Events.on <| name (Json.map (Down >> f) geometryDecoder)


onUp : String -> Property Ripple
onUp =
  onUp_ identity


onUp_ : (Ripple -> m) -> String -> Property m
onUp_ f name =
  Attribute << Mdc.Html.Events.on <| name (Json.succeed (f Up))

-}
addRipple : String -> Bounding -> Mode -> Model -> (Model -> msg) -> Property msg
addRipple id bounding mode model msg =
{-
  let
    classes =
      case mode of
          Normal ->
            Many <| defaultClasses bounding
          Primary ->
            Many <|
              defaultClasses ++ [ class "mdc-ripple-surface--primary" ]
          Accent ->
            Many <|
              defaultClasses ++ [ class "mdc-ripple-surface--accent" ]

    attr =
      [ onUp <| "touchstart"  --activateRipple
      , onDown <| "touchend"    --deActivateRipple
      , onDown <| "pointerdown" --activateRipple
      , onUp <| "pointerup"   --deActivateRipple
      , onDown <| "mousedown" --activateRipple
      , onUp <| "mouseup" --deActivateRipple
      , onDown <| "keydown" --activateRipple
      , onUp <| "keyup" --deActivateRipple
      --, Attribute << onFocus     <| focus --setRipple id model msg False
      --, Attribute << onBlur      <| blur  --setRipple id model msg False
      ] ++ classes
  in
      case Dict.get id model.ripple of
          Nothing ->
            Many <| attr
          Just rippled ->
            Many <| attr
--            case rippled of
--                True ->
--                  Many <| attr
--                False ->
--                  Many <| attr
-}
  class "mdc-ripple-surface--primary"

--activateRipple =
--  (Json.map (Down >> f) geometryDecoder)



--deActivateRipple =
--  (Json.succeed (f Up))



--focus



--blur









setRipple : String -> Model -> (Model -> msg) -> Bool -> msg
setRipple id model msg hover =
  case Dict.get id model.hover of
      Nothing ->
        { model | hover = Dict.insert id hover model.hover } |> msg
      Just hovered ->
        { model | hover = Dict.remove id model.hover |> Dict.insert id hover } |> msg
