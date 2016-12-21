module Mdc.Enhance.Ripple
  exposing
  ( addRipple
  , Bounding (..)
  )


{-|
-}
--import Mdc.Enhance.Native.Ripple exposing (supportsCssVariables)
import Mdc.Html.Attributes exposing (..)
import Mdc.Style exposing (Mode, Mode (..))


{-|
 -}
type Bounding
  = Bounded
  | Unbounded


{-|
 -}
addRipple : Bounding -> Mode -> Property msg
addRipple bounding mode =
  case mode of
      Normal ->
        Many <| defaultClasses
      Primary ->
        Many <|
          defaultClasses ++ [ class "mdc-ripple-surface--primary"
                            ]
      Accent ->
        Many <|
          defaultClasses ++ [ class "mdc-ripple-surface--accent"
                            ]


{-|
 -}
defaultClasses : List (Property msg)
defaultClasses =
  []
--  case supportsCssVariables of
--      True ->
--        [ class "mdc-ripple-surface"
--        , class "mdc-ripple-upgraded"
--        ]
--      False ->
--        [ class "mdc-ripple-surface"
--        ]
