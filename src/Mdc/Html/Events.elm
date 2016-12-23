module Mdc.Html.Events
  exposing
  ( onClick, onDoubleClick
  , onMouseDown, onMouseUp
  , onMouseEnter, onMouseLeave
  , onMouseOver, onMouseOut
  , onInput, onCheck, onSubmit
  , onBlur, onFocus
  , on, onWithOptions, Options, defaultOptions
  , targetValue, targetChecked, keyCode
  )

import String
import Html exposing (Attribute)
import Html.Events
import Json.Decode as Json exposing (..)

import Mdc.Html.Attributes exposing (Property, Property(..))


onClick : msg -> Property msg
onClick = Attribute << Html.Events.onClick

onDoubleClick : msg -> Property msg
onDoubleClick = Attribute << Html.Events.onDoubleClick

onMouseDown : msg -> Property msg
onMouseDown = Attribute << Html.Events.onMouseDown

onMouseUp : msg -> Property msg
onMouseUp = Attribute << Html.Events.onMouseUp

onMouseEnter : msg -> Property msg
onMouseEnter = Attribute << Html.Events.onMouseEnter

onMouseLeave : msg -> Property msg
onMouseLeave = Attribute << Html.Events.onMouseLeave

onMouseOver : msg -> Property msg
onMouseOver = Attribute << Html.Events.onMouseOver

onMouseOut : msg -> Property msg
onMouseOut = Attribute << Html.Events.onMouseOut

onInput : (String -> msg) -> Property msg
onInput = Attribute << Html.Events.onInput

onCheck : (Bool -> msg) -> Property msg
onCheck = Attribute << Html.Events.onCheck

onSubmit : msg -> Property msg
onSubmit = Attribute << Html.Events.onSubmit

onBlur : msg -> Property msg
onBlur = Attribute << Html.Events.onBlur

onFocus : msg -> Property msg
onFocus = Attribute << Html.Events.onFocus

on : String -> Decoder msg -> Property msg
on name = Attribute << Html.Events.on name

onWithOptions : String -> Options -> Decoder msg -> Property msg
onWithOptions name options = Attribute << Html.Events.onWithOptions name options

type alias Options = Html.Events.Options

defaultOptions : Options
defaultOptions = Html.Events.defaultOptions

targetValue : Decoder String
targetValue = Html.Events.targetValue

targetChecked : Decoder Bool
targetChecked = Html.Events.targetChecked

keyCode : Decoder Int
keyCode = Html.Events.keyCode
