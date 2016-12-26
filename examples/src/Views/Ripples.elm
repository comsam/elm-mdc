module Views.Ripples exposing (view)

import Html exposing (Html)

import Messages exposing (Msg, Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)


import Mdc.Style exposing (..)
import Mdc.Button exposing (button, raised)
import Mdc.Elevation exposing (e2)
import Mdc.Enhance exposing (isIcon)
import Mdc.Enhance.Ripple exposing (addRipple, Bounding(..))
import Mdc.Html exposing (div, p, h1, h2, text, a, br, section, fieldset, legend, code, figure, figcaption)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (..)


-- VIEW


view : Model -> Html Msg
view model =
  div
    []
    [ h1 [] [ text "MDC Ripples" ]
    , button [ onClick <| NavigateTo HomeRoute ] [ text "Back" ]
    , text " - "
    , a [ href <| reverse HomeRoute ] [ text "Back" ]
    , text " - "
    , a [ href "https://material-components-web.appspot.com/ripple.html", target "_black" ] [ text "Mdc demo" ]
    , text " - "
    , a [ href "https://github.com/material-components/material-components-web/blob/master/demos/ripple.html", target "_black" ] [ text "Mdc github" ]
    , br [] []
    , br [] []
      , div
        [ id "main"
        , class "ripple"
        ]
        [ section
            []
            [ h2 [] [ text "Bounded" ]
            , div
                [ class "demo-surface"
                , e2
                , addRipple "ripple-1" Bounded Normal model.mdc Mdc
                , tabindex 0
                ]
                [ text "Interact with me!" ]
            ]

        , section
            []
            [ h2 [] [ text "Unbounded" ]
            , div
                [ class "demo-surface"
                , isIcon
                , addRipple "ripple-1" Unbounded Normal model.mdc Mdc
                --, aria-label "Favorite" --TODO
                , tabindex 1
                ]
                [ text "favorite" ]
            ]

        , section
            []
            [ h2 [] [ text "Theme Styles" ]
            , div
                [ class "demo-surface"
                , e2
                , isPrimary
                --, addRipple Bounded Primary
                , tabindex 1
                ]
                [ text "Primary" ]
            , div
                [ class "demo-surface"
                , e2
                , isAccent
                --, addRipple Bounded Accent
                , tabindex 1
                ]
                [ text "Accent" ]
            ]

        , section
            []
            [ h2 [] [ text "Applied to "
                    , code [] [ text "<button> element" ]
                    ]
            , button
                [ class "demo-surface"
                , raised
                --, addRipple Bounded Normal
                ]
                [ text "button" ]
            ]
    ]
  {-
  <section>
<h2>Theme Styles</h2>
<div
class="mdc-ripple-surface
       mdc-theme--primary demo-surface mdc-elevation--z2" tabindex="0">
Primary
</div>
<div
class="mdc-ripple-surface mdc-ripple-surface--accent
       mdc-theme--accent demo-surface mdc-elevation--z2" tabindex="0">
Accent
</div>
</section>
<section>
<h2></h2>
<button type="button" class="mdc-ripple-surface mdc-elevation--z2 demo-surface">button</button>
</section>
-}


  , div [ style [("height", "100px")] ] []
  ]
