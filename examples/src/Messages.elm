module Messages exposing (..)

import Routing exposing (Route)

import Mdc.Types exposing (Msg(Update), Payload)

type Msg
  = NavigateTo Route
  | OpenClicked
  | CloseClicked

  | Update Payload
