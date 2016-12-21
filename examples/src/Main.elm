module Main exposing (main)

import Messages exposing (Msg, Msg(NavigateTo))
import Model exposing (Model, initialModel)
import Routing exposing (routeParser, reverse)
import Update exposing (update)
import Views.Main exposing (view)

import RouteUrl exposing (RouteUrlProgram)
import UrlParser exposing (..)
import RouteUrl exposing (UrlChange, HistoryEntry(NewEntry))
import Navigation exposing (Location)


main : RouteUrlProgram Never Model Msg
main =
  RouteUrl.program
    { delta2url = delta2url
    , location2messages = location2messages
    , init = init
    , update = update
    , view = view
    , subscriptions = subscriptions
    }


init : ( Model, Cmd Msg )
init =
  (initialModel, Cmd.none)


subscriptions model =
  Sub.none


delta2url : Model -> Model -> Maybe UrlChange
delta2url previous current =
  Just (UrlChange NewEntry (reverse current.route))


location2messages : Location -> List Msg
location2messages location =
  [ NavigateTo <| routeParser location ]
