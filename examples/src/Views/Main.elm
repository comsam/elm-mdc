module Views.Main exposing (view)

import Html exposing (Html)
import Html.Lazy
import Mdc.Html exposing (main_, div, h1, h2, text, a, br, section, fieldset, legend)
import Mdc.Html.Attributes exposing (..)
import Mdc.Html.Events exposing (onClick)
import Mdc.Button exposing (button)

import Messages exposing (Msg(..))
import Model exposing (Model)
import Routing exposing (Route(..), reverse)

import Views.Cards exposing (view)
import Views.Buttons exposing (view)
import Views.Elevations exposing (view)
import Views.Ripples exposing (view)
import Views.Fabs exposing( view )

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
      RipplesRoute         -> Views.Ripples.view model
      FabsRoute            -> Views.Fabs.view model
      _                    -> notFoundPage


{-| Render the Home Page.
-}
homePage : Html Msg
homePage =
  div
    [] [ h1 [] [ text "Material Design Components" ]
       , a [ href "https://material-components-web.appspot.com/", target "_black" ] [ text "Mdc demo" ]
       , text " - "
       , a [ href "https://github.com/material-components/material-components-web/blob/master/demos/", target "_black" ] [ text "Mdc github" ]
       , br [] []
       , br [] []
       , button [ onClick <| NavigateTo ButtonsRoute ] [ text "Buttons" ]
       , br [] []
       , button [ onClick <| NavigateTo CardsRoute ] [ text "Cards" ]
       , br [] []
       , button [ onClick <| NavigateTo ElevationsRoute ] [ text "Elevations" ]
       , br [] []
       , button [ onClick <| NavigateTo RipplesRoute ] [ text "Ripples" ]
       , br [] []
       , button [ onClick <| NavigateTo FabsRoute ] [ text "Fabs"]
       ]

{-| Render the 404 Page.
-}
notFoundPage : Html Msg
notFoundPage =
  div
  [] [  text "404" ]
