module View exposing (view)

import Html exposing (Html)
import Html.Lazy
import Mdc.Html exposing (div, h1, h2, text, a, br, section, fieldset, legend)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (onClick)
import Mdc.Button exposing (button)

import Messages exposing (Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

import Views.Cards exposing (view)
import Views.Buttons exposing (view)
import Views.Elevations exposing (view)

import Routing exposing (reverse)


view : Model -> Html Msg
view = Html.Lazy.lazy viewLazy


viewLazy : Model -> Html Msg
viewLazy ({route} as model) =
  case route of
      HomeRoute            -> homePage
      CardsRoute           -> Views.Cards.view model
      ButtonsRoute         -> Views.Buttons.view model
      ElevationsRoute      -> Views.Elevations.view model
      _                    -> notFoundPage


{-| Render the Home Page.
-}
homePage : Html Msg
homePage =
  div
  [] [ h1 [] [ text "Material Design Components" ]
     , br [] []
     , br [] []
     , button [ onClick <| NavigateTo ButtonsRoute ] [ text "Buttons" ]
     , br [] []
     , button [ onClick <| NavigateTo CardsRoute ] [ text "Cards" ]
     , br [] []
     , button [ onClick <| NavigateTo ElevationsRoute ] [ text "Elevations" ]
     ]

{-| Render the 404 Page.
-}
notFoundPage : Html Msg
notFoundPage =
  div
  [] [  text "404" ]
