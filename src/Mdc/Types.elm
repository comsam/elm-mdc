module Mdc.Types
  exposing
    ( Msg
    , Msg (..)
    , RippleMsg(..)
    , DomState
    , Model
    , model
    )


import Dict exposing (..)

import Mdc.Enhance.Dom exposing (..)



type alias DomState =
    { rect : Mdc.Enhance.Dom.Rectangle
    , clientX : Maybe Float
    , clientY : Maybe Float
    , touchX : Maybe Float
    , touchY : Maybe Float
    , type_ : String
    }


type RippleMsg
    = Up String
    | Down String DomState


type Msg
  = Hover String Bool
  | Ripple RippleMsg



type alias RippleModel =
  { isActivated : Bool
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
