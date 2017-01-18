module Messages exposing (..)

import Routing exposing (Route)
import Mdc exposing (Model)
import Material exposing (Msg)


type Msg
    = NavigateTo Route
    | OpenClicked
    | CloseClicked
    | OnHover Mdc.Model
    | Mdl (Material.Msg Msg)
