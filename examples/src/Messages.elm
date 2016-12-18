module Messages exposing (..)

import Routing exposing (Route)


type Msg
  = UrlUpdate Route
  | NavigateTo Route
  | OpenClicked
  | CloseClicked
