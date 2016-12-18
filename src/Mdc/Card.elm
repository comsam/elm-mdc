module Mdc.Card
  exposing
    ( card
    , cardDark
    , primary
    , title
    , titleLarge
    , subTitle
    , content
    , horizontal
    , actions
    , actionsVertical
    , actionButton
    , actionButtonDark
    , media
    , mediaItem
    , mediaItem_1dot5x
    , mediaItem_2x
    , mediaItem_3x
    )


import Html exposing (..)
import Html.Attributes exposing (href, class, classList, style, src)
import Html.Events exposing (onClick)


card : List (Attribute msg) -> List (Html msg) -> Html msg
card attributes children =
  card_ False attributes children


cardDark : List (Attribute msg) -> List (Html msg) -> Html msg
cardDark attributes children =
  card_ True attributes children


card_ : Bool -> List (Attribute msg) -> List (Html msg) -> Html msg
card_ darkTheme attributes children =
  let
    attr =
      [ classList
          [ ("mdc-card", True)
          , ("mdc-card--theme-dark", darkTheme)
          ]
      ] ++ attributes
  in
      div attr children


primary : List (Attribute msg) -> List (Html msg) -> Html msg
primary attributes children =
  let
    attr =
      [ class "mdc-card__primary" ] ++ attributes
  in
      section attr children


title : List (Attribute msg) -> List (Html msg) -> Html msg
title attributes children =
  let
    attr =
      [ class "mdc-card__title" ] ++ attributes
  in
      h1 attr children


titleLarge : List (Attribute msg) -> List (Html msg) -> Html msg
titleLarge attributes children =
  let
    attr =
      [ class "mdc-card__title--large" ] ++ attributes
  in
      title attr children


subTitle : List (Attribute msg) -> List (Html msg) -> Html msg
subTitle attributes children =
  let
    attr =
      [ class "mdc-card__subtitle" ] ++ attributes
  in
      h2 attr children


content : List (Attribute msg) -> List (Html msg) -> Html msg
content attributes children =
  let
    attr =
      [ class "mdc-card__supporting-text" ] ++ attributes
  in
      section attr children


horizontal : List (Attribute msg) -> List (Html msg) -> Html msg
horizontal attributes children =
  let
    attr =
      [ class "mdc-card__horizontal-block" ] ++ attributes
  in
      div attr children


actions : List (Attribute msg) -> List (Html msg) -> Html msg
actions attributes children =
  let
    attr =
      [ class "mdc-card__actions" ] ++ attributes
  in
      section attr children


actionsVertical : List (Attribute msg) -> List (Html msg) -> Html msg
actionsVertical attributes children =
  let
    attr =
      [ class "mdc-card__actions"
      , class "mdc-card__actions--vertical"
      ] ++ attributes
  in
      section attr children


actionButton : List (Attribute msg) -> List (Html msg) -> Html msg
actionButton attributes children =
  let
    attr =
      [ class "mdc-button"
      , class "mdc-button--compact"
      , class "mdc-card__action"
      ] ++ attributes
  in
      button attr children


actionButtonDark : List (Attribute msg) -> List (Html msg) -> Html msg
actionButtonDark attributes children =
  let
    attr =
      [ class "mdc-button"
      , class "mdc-button--compact"
      , class "mdc-button--theme-dark"
      , class "mdc-card__action"
      ] ++ attributes
  in
      button attr children


media : List (Attribute msg) -> List (Html msg) -> Html msg
media attributes children =
  let
    attr =
      [ class "mdc-card__media" ] ++ attributes
  in
      section attr children


type MediaItemType
  = X1
  | X1dot5
  | X2
  | X3
  | Nop


mediaItem : List (Attribute msg) -> List (Html msg) -> Html msg
mediaItem attributes children  =
  let
    attr =
      [ class "mdc-card__media-item" ] ++ attributes
  in
      img attr children


mediaItem_1dot5x : List (Attribute msg) -> List (Html msg) -> Html msg
mediaItem_1dot5x attributes children =
  mediaItem ([ class "mdc-card__media-item--1dot5x" ] ++ attributes) children


mediaItem_2x : List (Attribute msg) -> List (Html msg) -> Html msg
mediaItem_2x attributes children =
  mediaItem ([ class "mdc-card__media-item--2x" ] ++ attributes) children


mediaItem_3x : List (Attribute msg) -> List (Html msg) -> Html msg
mediaItem_3x attributes children =
  mediaItem ([ class "mdc-card__media-item--3x" ] ++ attributes) children
