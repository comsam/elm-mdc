module Model exposing (..)


import Routing exposing (Route)
import Mdc exposing (Model, model)

type alias Model =
  { route : Route
  , mdc : Mdc.Model
  }


initialModel : Route -> Model
initialModel route =
  { route = route
  , mdc = Mdc.model
  }
