module Update exposing (update)

import Navigation
import Messages exposing (Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), routeFromResult, reverse)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
      UrlUpdate route ->
        ( { model | route = route }, Cmd.none )

      NavigateTo route ->
        ( model, Navigation.newUrl <| reverse route )

      _ ->
        ( model, Cmd.none )
