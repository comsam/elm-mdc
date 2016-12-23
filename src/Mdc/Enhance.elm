module Mdc.Enhance
  exposing
    ( isIcon
    )


import Mdc.Html.Attributes exposing (..)


isIcon : Property msg
isIcon =
  class "material-icons"
