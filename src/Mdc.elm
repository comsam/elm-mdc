module Mdc
  exposing
    ( update
    )


{-| Mdc uses the Model when you want to enhance the default CSS behavior with javascript

#defintion
@docs Model

#default
@docs model
-}
import Mdc.Types
  exposing
  ( Msg
  , Msg (..)
  , Update
  , Update (..)
  , Model
  )
import Mdc.Enhance.Ripple exposing (update)


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
      Update message ->
        case message of
            Hover _ _ ->
              --Mdc.Enhance.Hover.update msg model
              (model, Cmd.none)
            Ripple ->
              Mdc.Enhance.Ripple.update msg model
