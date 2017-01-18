module Mdc.Button
    exposing
        ( button
        , asButton
        , raised
        , dense
        , compact
        , primary
        , accent
        )

import Html exposing (Html)
import Mdc.Html exposing (button)
import Mdc.Html.Attributes exposing (..)


button : List (Property msg) -> List (Html msg) -> Html msg
button attributes children =
    let
        attr =
            [ asButton ] ++ attributes
    in
        Mdc.Html.button attr children


asButton : Property msg
asButton =
    class "mdc-button"


raised : Property msg
raised =
    class "mdc-button--raised"


dense : Property msg
dense =
    class "mdc-button--dense"


compact : Property msg
compact =
    class "mdc-button--compact"


primary : Property msg
primary =
    class "mdc-button--primary"


accent : Property msg
accent =
    class "mdc-button--accent"



{-
   <button class="mdc-button mdc-button--raised mdc-button--compact">
     Compact Raised
   </button>
   <button class="mdc-button mdc-button--primary">
     Default with Primary
   </button>
   <button class="mdc-button mdc-button--raised mdc-button--primary">
     Raised with Primary
   </button>
   <button class="mdc-button mdc-button--accent">
     Default with Accent
   </button>
   <button class="mdc-button mdc-button--raised mdc-button--accent">
     Raised with Accent
   </button>
   <div class="mdc-button mdc-button--raised" tabindex="0" role="button">
     Div
   </div>
-}
