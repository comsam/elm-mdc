module Views.Cards exposing (view)

import Html exposing (..)
import Html.Attributes exposing (href, class, classList, style, src)
import Html.Events

import Messages exposing (Msg, Msg(..))
import Model exposing (Model)

import Mdc.Card exposing (..)

-- VIEW


view : Model -> Html Msg
view model =
  div
    []
    [ h1 [] [ text "MDC Cards" ]
    , section
        [ classList [ ("demo-typography--section", True)
                    , ("mdc-typography", True)]]
        [ card
            [ classList [ ("demo-card", True) ] ]
            [ media
                [ classList [ ("demo-card__16-9-media", True) ] ]
                []
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." ]
            ]

        , card
            [ classList [ ("demo-card", True)
                        , ("demo-card--with-avatar", True)] ]
            [ primary []
                [ div [ class "demo-card__avatar" ] []
                , title [] [ text "Title" ]
                , subTitle [] [ text "Subhead" ]
                ]
            , media
                [ classList [ ("demo-card__16-9-media", True) ] ]
                []
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)
                        , ("demo-card--with-avatar", True)] ]
            [ primary []
                [ div [ class "demo-card__avatar" ] []
                , title [] [ text "Title" ]
                , subTitle [] [ text "Subhead" ]
                ]
            , media
                [ classList [ ("demo-card__16-9-media", True) ] ]
                []
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." ]
            , actionsVertical [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)] ]
            [ media
                [ classList [ ("demo-card__16-9-media", True) ] ]
                []
            , primary []
                [ titleLarge [] [ text "Title goes here" ]
                , subTitle [] [ text "Subhead here" ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)] ]
            [ primary []
                [ titleLarge [] [ text "Title goes here" ]
                , subTitle [] [ text "Subhead here" ]
                ]
            , content [] [ text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , cardDark
            [ classList [ ("demo-card", True)
                        , ("demo-card--bg-demo", True)] ]
            [ primary []
                [ titleLarge [] [ text "Title goes here" ]
                , subTitle [] [ text "Subhead here" ]
                ]
            , actions [] [ actionButtonDark [] [ text "Action 1" ]
                         , actionButtonDark [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)
                        , ("demo-card--small", True)] ]
            [ media
                [ classList [ ("demo-card__16-9-media", True) ] ]
                [ titleLarge [] [ text "Title" ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)] ]
            [ horizontal
                []
                [ primary []
                    [ titleLarge [] [ text "Title here" ]
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
            [ classList [ ("demo-card", True)] ]
            [ horizontal
                []
                [ primary []
                    [ titleLarge [] [ text "Title here" ]
                    , subTitle [] [ text "Subtitle here" ]
                    ]
                , mediaItem_1dot5x
                    [ src "/assets/images/1-1.jpg"
                    ]
                    [ ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)] ]
            [ horizontal
                []
                [ primary []
                    [ titleLarge [] [ text "Title here" ]
                    , subTitle [] [ text "Subtitle here" ]
                    ]
                , mediaItem_2x
                    [ src "/assets/images/1-1.jpg"
                    ]
                    [ ]
                ]
            , actions [] [ actionButton [] [ text "Action 1" ]
                         , actionButton [] [ text "Action 2" ]
                         ]
            ]

        , card
            [ classList [ ("demo-card", True)] ]
            [ horizontal
                []
                [ mediaItem_3x
                    [ src "/assets/images/1-1.jpg"
                    ]
                    [ ]
                , actionsVertical [] [ actionButton [] [ text "A1" ]
                                     , actionButton [] [ text "A2" ]
                                     ]
                ]
            ]

        ]
    ]
