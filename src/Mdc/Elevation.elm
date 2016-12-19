module Mdc.Elevation
  exposing
    ( e0
    , e1
    , e2
    , e3
    , e4
    , e5
    , e6
    , e7
    , e8
    , e9
    , e10
    , e11
    , e12
    , e13
    , e14
    , e15
    , e16
    , e17
    , e18
    , e19
    , e20
    , e21
    , e22
    , e23
    , e24
    , transition
    )


import Html exposing (..)
import Html.Attributes exposing (href, class, classList, style, src)
import Html.Events exposing (onClick)

transition : Attribute msg
transition =
  class "mdc-elevation-transition"


elevation : Int -> Attribute msg
elevation z =
  class ("mdc-elevation--z" ++ toString z)


e0 : Attribute msg
e0 = elevation 0

e1 : Attribute msg
e1 = elevation 1

e2 : Attribute msg
e2 = elevation 2

e3 : Attribute msg
e3 = elevation 3

e4 : Attribute msg
e4 = elevation 4

e5 : Attribute msg
e5 = elevation 5

e6 : Attribute msg
e6 = elevation 6

e7 : Attribute msg
e7 = elevation 7

e8 : Attribute msg
e8 = elevation 8

e9 : Attribute msg
e9 = elevation 9

e10 : Attribute msg
e10 = elevation 10

e11 : Attribute msg
e11 = elevation 11

e12 : Attribute msg
e12 = elevation 12

e13 : Attribute msg
e13 = elevation 13

e14 : Attribute msg
e14 = elevation 14

e15 : Attribute msg
e15 = elevation 15

e16 : Attribute msg
e16 = elevation 16

e17 : Attribute msg
e17 = elevation 17

e18 : Attribute msg
e18 = elevation 18

e19 : Attribute msg
e19 = elevation 19

e20 : Attribute msg
e20 = elevation 20

e21 : Attribute msg
e21 = elevation 21

e22 : Attribute msg
e22 = elevation 22

e23 : Attribute msg
e23 = elevation 23

e24 : Attribute msg
e24 = elevation 24
