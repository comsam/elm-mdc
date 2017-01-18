module Messages exposing (..)

import Routing exposing (Route)
import Mdc exposing (Model)


type Msg
    = NavigateTo Route
    | OpenClicked
    | CloseClicked
    | OnHover Mdc.Model
