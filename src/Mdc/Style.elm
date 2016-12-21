module Mdc.Style
  exposing
    ( Mode
    , Mode(..)
    , isPrimary
    , isAccent
    )


import Mdc.Html.Attributes exposing (..)


type Mode
  = Normal
  | Primary
  | Accent



isPrimary : Property msg
isPrimary =
  class "mdc-theme--primary"


isAccent : Property msg
isAccent =
  class "mdc-theme--accent"
