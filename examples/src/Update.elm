module Update exposing (update)

import Messages exposing (Msg, Msg(..))
import Model exposing (Model)

import Mdc exposing (update)
import Mdc.Types

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
      NavigateTo route ->
          ( { model | route = route }, Cmd.none )

      Mdc payload ->
          Mdc.update payload model.mdc (merge model) Mdc

      _ ->
          ( model, Cmd.none )


merge : Model -> Mdc.Types.Model -> Model
merge model mdc =
    { model | mdc = mdc }
