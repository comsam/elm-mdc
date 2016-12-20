module Views.Cards exposing (view)

import Html exposing (Html)

import Messages exposing (Msg, Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

import Mdc.Button exposing (button)
import Mdc.Card exposing (..)
import Mdc.Html exposing (div, h1, h2, text, a, br, section, fieldset, legend)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (..)


-- VIEW


view : Model -> Html Msg
view model =
  div
    []
    [ h1 [] [ text "MDC Cards" ]
    , a [ href <| reverse HomeRoute ] [ text "Back" ]
    , text " - "
    , button [ onClick <| NavigateTo HomeRoute ] [ text "Back" ]
    , text " - "
    , a [ href "https://material-components-web.appspot.com/card.html", target "_black" ] [ text "Mdc demo" ]
    , br [] []
    , br [] []
    , section
        [ class "demo-typography--section"
        , class "mdc-typography"
        ]
        [ card
            [ class "demo-card" ]
            [ media
                [ class "demo-card__16-9-media" ]
                []
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." ]
            ]

        , card
            [ class "demo-card"
            , class "demo-card--with-avatar" ]
            [ primary []
                [ div [ class "demo-card__avatar" ] []
                , title [] [ text "Title" ]
                , subTitle [] [ text "Subhead" ]
                ]
            , media
                [ class "demo-card__16-9-media" ]
                []
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card"
            , class "demo-card--with-avatar" ]
            [ primary []
                [ div [ class "demo-card__avatar" ] []
                , title [] [ text "Title" ]
                , subTitle [] [ text "Subhead" ]
                ]
            , media
                [ class "demo-card__16-9-media" ]
                []
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." ]
            , actions [ vertical ]
              [ actionButton [] [ text "Action 1" ]
              , actionButton [] [ text "Action 2" ]
              ]
            ]

        , card
            [ class "demo-card" ]
            [ media
                [ class "demo-card__16-9-media" ]
                []
            , primary []
                [ title [ largeTitle ] [ text "Title goes here" ]
                , subTitle [] [ text "Subhead here" ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card" ]
            [ primary []
                [ title [ largeTitle ] [ text "Title goes here" ]
                , subTitle [] [ text "Subhead here" ]
                ]
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card"
            , class "demo-card--bg-demo"
            , darkCard ]
            [ primary []
                [ title [ largeTitle ] [ text "Title goes here" ]
                , subTitle [] [ text "Subhead here" ]
                ]
            , actions [] [ actionButton [ darkButton ] [ text "Action 1" ]
                         , actionButton [ darkButton ] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card"
            , class "demo-card--small" ]
            [ media
                [ class "demo-card__16-9-media" ]
                [ title [ largeTitle ] [ text "Title" ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         ]
            ]

        , card
            [ class "demo-card" ]
            [ horizontal
                []
                [ primary []
                    [ title [ largeTitle ] [ text "Title here" ]
                    , subTitle [] [ text "Subtitle here" ]
                    ]
                , mediaItem
                    [ src "/assets/images/1-1.jpg"
                    ]
                    [ ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card" ]
            [ horizontal
                []
                [ primary []
                    [ title [ largeTitle ] [ text "Title here" ]
                    , subTitle [] [ text "Subtitle here" ]
                    ]
                , mediaItem
                    [ src "/assets/images/1-1.jpg"
                    , size1dot5x
                    ]
                    [ ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card" ]
            [ horizontal
                []
                [ primary []
                    [ title [ largeTitle ] [ text "Title here" ]
                    , subTitle [] [ text "Subtitle here" ]
                    ]
                , mediaItem
                    [ src "/assets/images/1-1.jpg"
                    , size2x
                    ]
                    [ ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ class "demo-card" ]
            [ horizontal
                []
                [ mediaItem
                    [ src "/assets/images/1-1.jpg"
                    , size3x
                    ]
                    [ ]
                , actions [ vertical ]
                  [ actionButton [] [ text "A1" ]
                  , actionButton [] [ text "A2" ]
                  ]
                ]
            ]

        ]
    ]
