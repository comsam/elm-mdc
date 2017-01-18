module Mdc.Fab
    exposing
        ( fab
        , fabButton
        , fabMini
        , fabPlain
        , fabMaterial
        )

import Html exposing (Html)
import Mdc.Html exposing (button)
import Mdc.Html.Attributes exposing (..)
import Messages exposing (..)
import Model exposing (..)


fab : List (Property msg) -> List (Html msg) -> Html msg
fab attributes children =
    let
        attr =
            [ fabButton ] ++ attributes
    in
        Mdc.Html.button attr children


fabMaterial : Property msg
fabMaterial =
    class "material-icons"


fabButton : Property msg
fabButton =
    class "mdc-fab"


fabMini : Property msg
fabMini =
    class "mdc-fab--mini"


fabPlain : Property msg
fabPlain =
    class "mdc-fab--plain"
