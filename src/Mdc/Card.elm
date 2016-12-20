module Mdc.Card
  exposing
    ( card
    , primary
    , title
    , subTitle
    , content
    , horizontal
    , actions
    , actionButton
    , media
    , mediaItem

    , largeTitle
    , vertical
    , darkCard
    , darkButton
    , size1dot5x
    , size2x
    , size3x
    )


import Html exposing (Html)


import Mdc.Html exposing (div, section, img, h1, h2)
import Mdc.Html.Attributes exposing (..)
import Mdc.Button exposing (button, compact)


card : List (Property msg) -> List (Html msg) -> Html msg
card attributes children =
  let
    attr =
      [ class "mdc-card" ] ++ attributes
  in
      div attr children


primary : List (Property msg) -> List (Html msg) -> Html msg
primary attributes children =
  let
    attr =
      [ class "mdc-card__primary" ] ++ attributes
  in
      section attr children


title : List (Property msg) -> List (Html msg) -> Html msg
title attributes children =
  let
    attr =
      [ class "mdc-card__title" ] ++ attributes
  in
      h1 attr children


subTitle : List (Property msg) -> List (Html msg) -> Html msg
subTitle attributes children =
  let
    attr =
      [ class "mdc-card__subtitle" ] ++ attributes
  in
      h2 attr children


content : List (Property msg) -> List (Html msg) -> Html msg
content attributes children =
  let
    attr =
      [ class "mdc-card__supporting-text" ] ++ attributes
  in
      section attr children


horizontal : List (Property msg) -> List (Html msg) -> Html msg
horizontal attributes children =
  let
    attr =
      [ class "mdc-card__horizontal-block" ] ++ attributes
  in
      div attr children


actions : List (Property msg) -> List (Html msg) -> Html msg
actions attributes children =
  let
    attr =
      [ class "mdc-card__actions" ] ++ attributes
  in
      section attr children


actionButton : List (Property msg) -> List (Html msg) -> Html msg
actionButton attributes children =
  Mdc.Button.button [ compact, class "mdc-card__action" ] children


media : List (Property msg) -> List (Html msg) -> Html msg
media attributes children =
  let
    attr =
      [ class "mdc-card__media" ] ++ attributes
  in
      section attr children


mediaItem : List (Property msg) -> List (Html msg) -> Html msg
mediaItem attributes children  =
  let
    attr =
      [ class "mdc-card__media-item" ] ++ attributes
  in
      img attr children



largeTitle : Property msg
largeTitle =
  class "mdc-card__title--large"


vertical : Property msg
vertical =
  class "mdc-card__actions--vertical"


darkCard : Property msg
darkCard =
  class "mdc-card--theme-dark"


darkButton : Property msg
darkButton =
  class "mdc-button--theme-dark"


size1dot5x : Property msg
size1dot5x =
  class "mdc-card__media-item--1dot5x"


size2x : Property msg
size2x =
  class "mdc-card__media-item--2x"


size3x : Property msg
size3x =
  class "mdc-card__media-item--3x"
