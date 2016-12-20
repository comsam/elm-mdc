module Mdc.Html.Events
  exposing
  ( onClick{-, onDoubleClick-}
  {-, onMouseDown, onMouseUp-}
  {-, onMouseEnter, onMouseLeave-}
  {-, onMouseOver, onMouseOut-}
  {-, onInput, onCheck, onSubmit-}
  {-, onBlur, onFocus-}
  {-, on, onWithOptions, Options, defaultOptions-}
  {-, targetValue, targetChecked, keyCode-}
  )

import String
import Html exposing (Attribute)
import Html.Events

import Mdc.Html.Attributes exposing (Property, Property(..))


onClick : msg -> Property msg
onClick = Attribute << Html.Events.onClick
