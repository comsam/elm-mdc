module Views.Buttons exposing (view)

import Html exposing (Html)

import Messages exposing (Msg, Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

import Mdc.Button exposing (..)
import Mdc.Html exposing (div, h1, h2, text, a, br, section, fieldset, legend, main_)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (..)


-- VIEW


view : Model -> Html Msg
view model =
  div
  []
  [ h1 [] [ text "MDC Web Button" ]
  , button [ onClick <| NavigateTo HomeRoute ] [ text "Back" ]
  , text " - "
  , a [ href <| reverse HomeRoute ] [ text "Back" ]
  , text " - "
  , a [ href "https://material-components-web.appspot.com/button.html", target "_black" ] [ text "Mdc demo" ]
  , text " - "
  , a [ href "https://github.com/material-components/material-components-web/blob/master/demos/button.html", target "_black" ] [ text "Mdc github" ]
  , br [] []
  , br [] []
  , section []

    [ fieldset []
        [ legend [] [ text "Buttons" ]
        , button [] [ text "Default" ]
        , button [ raised ] [ text "Raised" ]
        , button [ dense ] [ text "Dense Default" ]
        , button [ raised, dense ] [ text "Dense Raised" ]
        , button [ compact ] [ text "Compact" ]
        , button [ raised, compact ] [ text "Compact Raised" ]
        , button [ primary ] [ text "Default with Primary" ]
        , button [ raised, primary ] [ text "Raised with Primary" ]
        , button [ accent ] [ text "Default with Accent" ]
        , button [ raised, accent ] [ text "Raised with Accent" ]
        , div [ asButton, raised, tabindex 1, role "button" ] [ text "Div" ]
        ]

    , fieldset [ disabled True ]
      [ legend [] [ text "Disabled Buttons" ]
      , button [] [ text "Default" ]
      , button [ raised ] [ text "Raised" ]
      , button [ dense ] [ text "Dense Default" ]
      , button [ raised, dense ] [ text "Dense Raised" ]
      , button [ compact ] [ text "Compact" ]
      , button [ raised, compact ] [ text "Compact Raised" ]
      , button [ primary ] [ text "Default with Primary" ]
      , button [ raised, primary ] [ text "Raised with Primary" ]
      , button [ accent ] [ text "Default with Accent" ]
      , button [ raised, accent ] [ text "Raised with Accent" ]
      , div [ asButton, raised, tabindex 1, role "button" ] [ text "Div" ]
      ]
    ]

  , h2 [] [ text "Dark theme" ]
  , section [ class "mdc-theme--dark" ]

    [ fieldset []
        [ legend [] [ text "Buttons" ]
        , button [] [ text "Default" ]
        , button [ raised ] [ text "Raised" ]
        , button [ dense ] [ text "Dense Default" ]
        , button [ raised, dense ] [ text "Dense Raised" ]
        , button [ compact ] [ text "Compact" ]
        , button [ raised, compact ] [ text "Compact Raised" ]
        , button [ primary ] [ text "Default with Primary" ]
        , button [ raised, primary ] [ text "Raised with Primary" ]
        , button [ accent ] [ text "Default with Accent" ]
        , button [ raised, accent ] [ text "Raised with Accent" ]
        , div [ asButton, raised, tabindex 1, role "button" ] [ text "Div" ]
        ]

    , fieldset [ disabled True ]
      [ legend [] [ text "Disabled Buttons" ]
      , button [] [ text "Default" ]
      , button [ raised ] [ text "Raised" ]
      , button [ dense ] [ text "Dense Default" ]
      , button [ raised, dense ] [ text "Dense Raised" ]
      , button [ compact ] [ text "Compact" ]
      , button [ raised, compact ] [ text "Compact Raised" ]
      , button [ primary ] [ text "Default with Primary" ]
      , button [ raised, primary ] [ text "Raised with Primary" ]
      , button [ accent ] [ text "Default with Accent" ]
      , button [ raised, accent ] [ text "Raised with Accent" ]
      , div [ asButton, raised, tabindex 1, role "button" ] [ text "Div" ]
      ]
    ]
  ]
