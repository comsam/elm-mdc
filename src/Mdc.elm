module Mdc
  exposing
    ( Model
    , model
    )


import Dict exposing (..)


type alias Model =
  { hover : Dict String Bool
  }


model =
  { hover = Dict.empty
  }
