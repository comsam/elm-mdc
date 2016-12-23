module Update exposing (update)

import Task
import Navigation
import Messages exposing (Msg, Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

import Mdc exposing (update1)
import Mdc.Types

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
      NavigateTo route ->
          ( { model | route = route }, Cmd.none )

      Update payload ->
          Mdc.update1 payload model.mdc (merge model) Update

      _ ->
          ( model, Cmd.none )


merge : Model -> Mdc.Types.Model -> Model
merge model mdc =
    { model | mdc = mdc }
