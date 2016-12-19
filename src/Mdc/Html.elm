module Mdc.Html
  exposing
  ( Property
  , Property (..)
  , div
  , span
  , section
  , figure
  , figcaption
  , code
  , img
  , p
  , h1
  , h2
  , text
  , button

  , nop
  , when
  , attribute
  , id
  , class
  , classList
  , style
  , src
  )


import String
import Html exposing (Html, Attribute)
import Html.Attributes


type Property m
  = Attribute (Html.Attribute m)
  | Many (List (Property m))
  | None


attribute : Html.Attribute m -> Property m
attribute =
  Attribute


styled : (List (Attribute m) -> a) -> List (Property m) -> a
styled ctor props =
  let
    attributes =
      props
        |> List.foldl collect1 []
        |> List.filterMap onlyAttributes
  in
      ctor attributes



collect1 : Property m -> List (Property m) -> List (Property m)
collect1 option acc =
  case option of
      Attribute x ->
        option :: acc

      Many options ->
        List.foldl collect1 acc options

      None ->
        acc


onlyAttributes : Property m -> Maybe (Html.Attribute m)
onlyAttributes property =
  case property of
      Attribute a ->
        Just a
      _ ->
        Nothing


nop : Property m
nop =
  None


when : Property m -> Bool -> Property m
when prop guard =
    if guard then
        prop
    else
        nop


div : List (Property m) -> List (Html m) -> Html m
div =
  styled Html.div


span : List (Property m) -> List (Html m) -> Html m
span =
  styled Html.span


section : List (Property m) -> List (Html m) -> Html m
section =
  styled Html.section


img : List (Property m) -> List (Html m) -> Html m
img  =
  styled Html.img-- properties <| children


figure : List (Property m) -> List (Html m) -> Html m
figure =
  styled Html.figure


figcaption : List (Property m) -> List (Html m) -> Html m
figcaption =
  styled Html.figcaption


code : List (Property m) -> List (Html m) -> Html m
code =
  styled Html.code


text : String -> Html m
text =
  Html.text


p : List (Property m) -> List (Html m) -> Html m
p =
  styled Html.p


h1 : List (Property m) -> List (Html m) -> Html m
h1 =
  styled Html.h1


h2 : List (Property m) -> List (Html m) -> Html m
h2 =
  styled Html.h2


button : List (Property m) -> List (Html m) -> Html m
button =
  styled Html.button


-- Attributes


id : String -> Property m
id =
  Attribute << Html.Attributes.id


class : String -> Property m
class =
  Attribute << Html.Attributes.class


style : List (String, String) -> Property m
style =
  Attribute << Html.Attributes.style


classList : List (String, Bool) -> Property m
classList =
  Attribute << Html.Attributes.classList


src : String -> Property m
src =
  Attribute << Html.Attributes.src
