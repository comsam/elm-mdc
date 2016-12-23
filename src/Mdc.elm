module Mdc
  exposing
    ( update1
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
    , Payload
    , Payload (..)
    , Model
    )

import Mdc.Types
import Mdc.Style

import Mdc.Button
import Mdc.Card
import Mdc.Elevation

import Mdc.Html
import Mdc.Html.Attributes
import Mdc.Html.Events

import Mdc.Enhance
import Mdc.Enhance.Dom
import Mdc.Enhance.Hover
import Mdc.Enhance.Ripple

update1 : Payload -> Model -> (Model -> model) -> msg -> (model, Cmd msg)
update1 payload model merge msg =
    let
        (m, c) =
            case payload of
                Hover _ _ ->
                    Mdc.Enhance.Hover.update payload model msg
                Ripple ->
                    (model, Cmd.none)
                    --Mdc.Enhance.Ripple.update payload model
    in
        (merge m, Cmd.batch [c])
