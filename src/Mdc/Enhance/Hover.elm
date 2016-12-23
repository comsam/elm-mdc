module Mdc.Enhance.Hover
    exposing
    ( onHover
    , update
    )


import Dict exposing (..)

import Mdc.Types exposing (Msg, Msg(Update), Payload, Payload (..), Model)
import Mdc.Html exposing (..)
import Mdc.Html.Attributes exposing (..)
import Html.Events exposing (onMouseEnter, onMouseLeave)
import Mdc.Style exposing (..)


onHover : String -> List (Property msg) -> List (Property msg) -> Model -> (Payload -> msg) -> Property msg
onHover id normal hover model msg =
    let
        attr =
            [ Attribute << onMouseEnter <| msg <| (Hover id True)
            , Attribute << onMouseLeave <| msg <| (Hover id False)
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


update : Payload -> Model -> msg -> (Model, Cmd msg)
update payload model msg =
    case payload of
        Hover id hovered ->
            (setHover id hovered model msg, Cmd.none)
        _ ->
            (model, Cmd.none)


setHover : String -> Bool -> Model -> msg -> Model
setHover id hover model msg =
    case Dict.get id model.hover of
        Nothing ->
            { model | hover = Dict.insert id hover model.hover }
        Just hovered ->
            { model | hover = Dict.remove id model.hover |> Dict.insert id hover }
