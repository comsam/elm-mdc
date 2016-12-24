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
    , Model
    )

import Mdc.Types
import Mdc.Enhance.Hover
import Mdc.Enhance.Ripple

update : Msg -> Model -> (Model -> model) -> (Msg -> msg) -> (model, Cmd msg)
update message model merge msg =
    let
        (mdl, cmd) =
            case message of
                Hover _ _ ->
                    Mdc.Enhance.Hover.update message model
                Ripple ->
                    Mdc.Enhance.Ripple.update message model
    in
        (merge mdl, Cmd.map msg cmd)
