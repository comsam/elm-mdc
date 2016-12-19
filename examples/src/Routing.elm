module Routing exposing (..)

import Navigation
import UrlParser exposing (..)


type Route
  = HomeRoute
  | CardsRoute
  | ElevationsRoute
  | NotFoundRoute


{-| Parse a URL into a Route.
-}
matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map HomeRoute (s "")
        , map CardsRoute (s "cards")
        , map ElevationsRoute (s "elevations")
        ]


{-| Attempt to parse a Locaton's Hash into a Route.
-}
routeParser : Navigation.Location -> Route
routeParser location =
  let
    newLocation =
      if location.hash == "" then
        { location | hash = "#/" }
      else
        location
  in
    newLocation |> parseHash matchers |> Maybe.withDefault NotFoundRoute


{-| Pull a Route out of the parsed URL, defaulting to the `NotFoundRoute`.
-}
routeFromResult : Result String Route -> Route
routeFromResult =
    Result.withDefault NotFoundRoute


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
            ElevationsRoute    -> "elevations"
            NotFoundRoute      -> "404"
  in
      "#" ++ routeToString route
