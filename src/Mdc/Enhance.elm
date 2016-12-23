module Mdc.Enhance
  exposing
    ( onHover
    , isIcon
    )

import Dict exposing (..)
import Html.Events exposing (onMouseEnter, onMouseLeave)

import Mdc.Types exposing (Model)
import Mdc.Html exposing (..)
import Mdc.Html.Attributes exposing (..)
import Mdc.Style exposing (..)


onHover : String -> List (Property msg) -> List (Property msg) -> Model -> (Model -> msg) -> Property msg
onHover id normal hover model msg =
  let
    attr =
      [ Attribute << onMouseEnter <| setHover id model msg True
      , Attribute << onMouseLeave <| setHover id model msg False
      ]
  in
      case Dict.get id model.hover of
          Nothing ->
            Many <| (attr ++ normal)
          Just hovered ->
            case hovered of
                True ->
                  Many <| (attr ++ hover)
                False ->
                  Many <| (attr ++ normal)


setHover : String -> Model -> (Model -> msg) -> Bool -> msg
setHover id model msg hover =
  case Dict.get id model.hover of
      Nothing ->
        { model | hover = Dict.insert id hover model.hover } |> msg
      Just hovered ->
        { model | hover = Dict.remove id model.hover |> Dict.insert id hover } |> msg



isIcon : Property msg
isIcon =
  class "material-icons"
