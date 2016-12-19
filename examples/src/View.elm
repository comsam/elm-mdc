module View exposing (view)

import Html exposing (..)
import Html.Attributes exposing (href, class, style)
import Html.Lazy

import Messages exposing (Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

import Views.Cards exposing (view)
import Views.Elevations exposing (view)

import Routing exposing (reverse)


view : Model -> Html Msg
view = Html.Lazy.lazy viewLazy


viewLazy : Model -> Html Msg
viewLazy ({route} as model) =
  case route of
      HomeRoute            -> homePage
      CardsRoute           -> Views.Cards.view model
      ElevationsRoute      -> Views.Elevations.view model
      _                    -> notFoundPage


{-| Render the Home Page.
-}
homePage : Html msg
homePage =
  div
  [] [ text "Material Design Components" ]

{-| Render the 404 Page.
-}
notFoundPage : Html msg
notFoundPage =
  div
  [] [  text "404" ]
