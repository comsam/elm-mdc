module Model exposing (..)


import Routing exposing (Route, Route(HomeRoute))
import Mdc exposing (Model, model)

type alias Model =
  { route : Route
  , mdc : Mdc.Model
  }


initialModel : Model
initialModel =
  { route = HomeRoute
  , mdc = Mdc.model
  }
