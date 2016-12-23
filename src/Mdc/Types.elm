module Mdc.Types
  exposing
    ( Msg
    , Msg (..)
    , Payload
    , Payload (..)
    , Model
    , model
    )


import Dict exposing (..)


type Msg
  = Update Payload


type Payload
  = Hover String Bool
  | Ripple



type alias RippleModel =
  { isActive : Bool
  }


{-| Mdc Model definition
-}
type alias Model =
  { hover : Dict String Bool
  , ripple : Dict String RippleModel
  }


{-| Initial model value
-}
model : Model
model =
  { hover = Dict.empty
  , ripple = Dict.empty
  }
