module Mdc.Enhance
  exposing
    ( onHover
    )

import Dict exposing (..)
import Html.Events exposing (onMouseEnter, onMouseLeave)

import Mdc exposing (Model)
import Mdc.Html exposing (..)
import Mdc.Html.Attributes exposing (..)


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


doUpdate : Maybe Bool -> Maybe Bool
doUpdate h =
  case h of
      Nothing -> h
      Just h  -> Just h
