module Messages exposing (..)

import Routing exposing (Route)

import Mdc.Types exposing (Model)

type Msg
  = NavigateTo Route
  | OpenClicked
  | CloseClicked

  | OnHover Mdc.Types.Model
