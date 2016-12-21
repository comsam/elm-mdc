module Routing exposing (..)

import UrlParser exposing (..)
import Navigation exposing (Location)


type Route
  = HomeRoute
  | CardsRoute
  | ButtonsRoute
  | ElevationsRoute
  | RipplesRoute
  | NotFoundRoute


{-| Parse a URL into a Route.
-}
matchers : Parser (Route -> a) a
matchers =
  oneOf
  [ map HomeRoute (s "")
  , map CardsRoute (s "cards")
  , map ButtonsRoute (s "buttons")
  , map ElevationsRoute (s "elevations")
  , map RipplesRoute (s "ripples")
  ]


{-| Attempt to parse a Locaton's Hash into a Route.
-}
routeParser : Location -> Route
routeParser location =
  let
    newLocation =
      if location.hash == "" then
        { location | hash = "#/" }
      else
        location
  in
      newLocation
        |> parseHash matchers
        |> Maybe.withDefault NotFoundRoute


{-| Turn a Route into the URL the Route represents.
-}
reverse : Route -> String
reverse route =
  let
    routeToString route =
      flip (++) "/" <|
        case route of
            HomeRoute          -> ""
            CardsRoute         -> "cards"
            ButtonsRoute       -> "buttons"
            ElevationsRoute    -> "elevations"
            RipplesRoute       -> "ripples"
            NotFoundRoute      -> "404"
  in
      "#" ++ routeToString route
