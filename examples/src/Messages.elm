module Messages exposing (..)

import Routing exposing (Route)
import Mdc.Types exposing (Msg)


type Msg
  = NavigateTo Route
  | OpenClicked
  | CloseClicked

  | Mdc Mdc.Types.Msg
