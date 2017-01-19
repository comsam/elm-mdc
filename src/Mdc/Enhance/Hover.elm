module Mdc.Enhance.Hover
    exposing
    ( onHover
    , update
    )


import Dict exposing (..)

import Mdc.Types exposing (Msg, Msg(Hover), Model)
import Mdc.Html.Attributes exposing (..)
import Html.Events exposing (onMouseEnter, onMouseLeave)


onHover : String -> List (Property msg) -> List (Property msg) -> Model -> (Msg -> msg) -> Property msg
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


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Hover id hovered ->
            (setHover id hovered model, Cmd.none)
        _ ->
            (model, Cmd.none)


setHover : String -> Bool -> Model -> Model
setHover id hover model =
    case Dict.get id model.hover of
        Nothing ->
            { model | hover = Dict.insert id hover model.hover }
        Just hovered ->
            { model | hover = Dict.remove id model.hover |> Dict.insert id hover }
