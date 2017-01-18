module Model exposing (..)

import Routing exposing (Route, Route(HomeRoute))
import Mdc exposing (Model, model)
import Material exposing (Model, model)


type alias Model =
    { route : Route
    , mdc : Mdc.Model
    , mdl : Material.Model
    }


initialModel : Model
initialModel =
    { route = HomeRoute
    , mdc = Mdc.model
    , mdl = Material.model
    }
