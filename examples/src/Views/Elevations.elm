module Views.Elevations exposing (view)

import Html exposing (..)
import Html.Attributes exposing (id, href, class, classList, style, src)
import Html.Events

import Messages exposing (Msg, Msg(..))
import Model exposing (Model)

import Mdc.Elevation exposing (..)
import Mdc.Enhance exposing (onHover)

-- VIEW


view : Model -> Html Msg
view model =
  div
    []
    [ h1 [] [ text "MDC Elevations" ]
    , section
        [ class "demo-surfaces"
        , class "mdc-typography"
        ]
        [ fig e0 "0"
        , fig e1 "1"
        , fig e2 "2"
        , fig e3 "3"
        , fig e4 "4"
        , fig e5 "5"
        , fig e6 "6"
        , fig e7 "7"
        , fig e8 "8"
        , fig e9 "9"
        , fig e10 "10"
        , fig e11 "11"
        , fig e12 "12"
        , fig e13 "13"
        , fig e14 "14"
        , fig e15 "15"
        , fig e16 "16"
        , fig e17 "17"
        , fig e18 "18"
        , fig e19 "19"
        , fig e20 "20"
        , fig e21 "21"
        , fig e22 "22"
        , fig e23 "23"
        , fig e24 "24"
        ]

    , section
        []
        [ div
            ([ id "hover-el"
             , class "mdc-elevation-transition"
            ] ++ (onHover "hover-el" [ e2 ] [ e6 ] model.mdc OnHover))
            [ p [] [ text "Hover over or tap me for a transition" ]
            ]
        ]
    , div [ style [("height", "100px")] ] []
    ]


fig : Attribute msg -> String -> Html msg
fig el z =
  figure
    [ class "demo-surface"
    , el
    ]
    [ figcaption
        []
        [ text "0dp ("
        , code [] [ text <| "mdc-elevation--z" ++ z ]
        , text ")"
        ]
    ]
