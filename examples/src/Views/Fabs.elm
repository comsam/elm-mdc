module Views.Fabs exposing (view)

import Html exposing (Html)
import Messages exposing (Msg, Msg(..))
import Model exposing (Model)
import Mdc.Html exposing (div, h1, text, a, br, legend, fieldset, section, span)
import Routing exposing (Route(..), reverse)
import Mdc.Fab exposing (..)
import Mdc.Html.Events exposing (..)
import Mdc.Button exposing (button)
import Mdc.Html.Attributes exposing (..)
import Svg.Attributes as SvgAttr exposing (width, height, viewBox)
import Svg as Svg


-- VIEW


view : Model -> Html Msg
view model =
    div
        []
        [ h1 [] [ text "MDC FAB" ]
        , fab [ id "demo-absolute-fab" ]
            [ span [ class "mdc-fab__icon" ]
                [ Svg.svg [ SvgAttr.width "24", SvgAttr.height "24", SvgAttr.viewBox "0 0 24 24" ]
                    [ Svg.path [ SvgAttr.d "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" ] []
                    ]
                ]
            ]
        , button [ onClick <| NavigateTo HomeRoute ] [ text "Back" ]
        , text " - "
        , a [ href <| reverse HomeRoute ] [ text "Back" ]
        , text " - "
        , a [ href "https://material-components-web.appspot.com/fab.html", target "_black" ] [ text "Mdc demo" ]
        , text " - "
        , a [ href "https://github.com/material-components/material-components-web/blob/master/demos/fab.html", target "_black" ] [ text "Mdc github" ]
        , br [] []
        , br [] []
        , section []
            [ fieldset []
                [ legend [] [ text "Normal FABs" ]
                , fab [ fabMaterial, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                , fab [ fabMini, fabMaterial, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                , fab [ fabPlain, fabMaterial, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                , fab [ fabMini, fabMaterial, fabPlain, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                ]
            , fieldset [ disabled True ]
                [ legend [] [ text "Disabled FABs" ]
                , fab [ fabMaterial, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                , fab [ fabMini, fabMaterial, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                , fab [ fabPlain, fabMaterial, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                , fab [ fabMini, fabMaterial, fabPlain, ariaLabel "Favorite" ] [ span [ class "mdc-fab__icon" ] [ text "favorite_border" ] ]
                ]
            ]
        , div [ style [ ( "height", "100px" ) ] ] []
        ]
