module Model exposing (..)


import Routing exposing (Route, Route(HomeRoute))
import Mdc.Types exposing (Model, model)

type alias Model =
  { route : Route
  , mdc : Mdc.Types.Model
  }


initialModel : Model
initialModel =
  { route = HomeRoute
  , mdc = Mdc.Types.model
  }
