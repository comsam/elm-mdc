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


import Mdc.Html exposing (..)
import Mdc.Html.Attributes exposing (..)


transition : Property msg
transition =
  class "mdc-elevation-transition"


elevation : Int -> Property msg
elevation z =
  class ("mdc-elevation--z" ++ toString z)


e0 : Property msg
e0 = elevation 0

e1 : Property msg
e1 = elevation 1

e2 : Property msg
e2 = elevation 2

e3 : Property msg
e3 = elevation 3

e4 : Property msg
e4 = elevation 4

e5 : Property msg
e5 = elevation 5

e6 : Property msg
e6 = elevation 6

e7 : Property msg
e7 = elevation 7

e8 : Property msg
e8 = elevation 8

e9 : Property msg
e9 = elevation 9

e10 : Property msg
e10 = elevation 10

e11 : Property msg
e11 = elevation 11

e12 : Property msg
e12 = elevation 12

e13 : Property msg
e13 = elevation 13

e14 : Property msg
e14 = elevation 14

e15 : Property msg
e15 = elevation 15

e16 : Property msg
e16 = elevation 16

e17 : Property msg
e17 = elevation 17

e18 : Property msg
e18 = elevation 18

e19 : Property msg
e19 = elevation 19

e20 : Property msg
e20 = elevation 20

e21 : Property msg
e21 = elevation 21

e22 : Property msg
e22 = elevation 22

e23 : Property msg
e23 = elevation 23

e24 : Property msg
e24 = elevation 24
