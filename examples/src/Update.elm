module Update exposing (update)

import Navigation
import Messages exposing (Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
      NavigateTo route ->
        ( { model | route = route }, Cmd.none )
        --( model, Navigation.newUrl <| reverse route )

      OnHover mdc ->
        ( { model | mdc = mdc }, Cmd.none )

      _ ->
        ( model, Cmd.none )
