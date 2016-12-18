module Main exposing (main)

import Navigation

import Messages exposing (Msg(UrlUpdate))
import Model exposing (Model, initialModel)
import Routing exposing (Route, routeFromResult, routeParser)
import Update exposing (update)
import View exposing (view)


main : Program Never Model Msg
main =
  Navigation.program parser
    { init = init
    , update = update
    , subscriptions = subscriptions
    , view = view
    }


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
  let
    route =
      routeParser location
  in
      (initialModel route, Cmd.none)


subscriptions model =
  Sub.none


parser : Navigation.Location -> Msg
parser location =
  UrlUpdate <| routeParser location
