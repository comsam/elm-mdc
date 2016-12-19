module Mdc.Enhance
  exposing
    ( onHover
    )

import Dict exposing (..)
import Html exposing (..)
import Html.Attributes exposing (href, class, classList, style, src)
import Html.Events exposing (onMouseEnter, onMouseLeave)

import Mdc exposing (Model)

onHover : String -> List (Attribute msg) -> List (Attribute msg) -> Model -> (Model -> msg) -> List (Attribute msg)
onHover id normal hover model msg =
  let
    attr =
      [ onMouseEnter <| setHover id model msg True
      , onMouseLeave <| setHover id model msg False
      ]
  in
      case Dict.get id model.hover of
          Nothing ->
            attr ++ normal
          Just hovered ->
            case hovered of
                True ->
                  attr ++ hover
                False ->
                  attr ++ normal


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
