module Mdc
  exposing
    ( Model
    , model
    )


{-| Mdc uses the Model when you want to enhance the default CSS behavior with javascript

#defintion
@docs Model

#default
@docs model
-}
import Dict exposing (..)


{-| Mdc Model definition
-}
type alias Model =
  { hover : Dict String Bool
  }


{-| Initial model value
-}
model : Model
model =
  { hover = Dict.empty
  }
