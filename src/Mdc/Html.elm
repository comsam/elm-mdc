module Mdc.Html
  exposing
  (
  {-, Html, Attribute-}
   text{-, node, map-}
  , h1, h2, h3, h4, h5, h6
  , div, p, hr, blockquote
  , span, a, code{-, em, strong, i, b, u, sub, sup-}, br
  {-, ol, ul, li, dl, dt, dd-}
  , img{-, iframe, canvas, math-}
  {-, form, input, textarea-}, button{-, select, option-}
  , section, nav, article, aside, header, footer, address, main_, body
  , figure, figcaption
  , fieldset, legend{-, label, datalist, optgroup, keygen, output, progress, meter-}
  {-, audio, video, source, track-}
  {-, embed, object, param-}
  {-, ins, del-}
  {-, small, cite, dfn, abbr, time, var, samp, kbd, s, q-}
  {-, mark, ruby, rt, rp, bdi, bdo, wbr-}
  {-, details, summary, menuitem, menu)-}
  )


--import String
import Html exposing (Html, Attribute)
import Mdc.Html.Attributes exposing (..)


styled : (List (Attribute m) -> a) -> List (Property m) -> a
styled ctor props =
  let
    attributes =
      props
        |> List.foldr collect1 []
        |> List.filterMap onlyAttributes
  in
      ctor attributes


collect1 : Property m -> List (Property m) -> List (Property m)
collect1 option acc =
  case option of
      Attribute x ->
        option :: acc

      Many options ->
        List.foldr collect1 acc options

      None ->
        acc


onlyAttributes : Property m -> Maybe (Html.Attribute m)
onlyAttributes property =
  case property of
      Attribute a ->
        Just a
      _ ->
        Nothing


-- HTML Components


text : String -> Html m
text =
  Html.text


type alias ComponentSignature m =
  List (Property m) -> List (Html m) -> Html m


h1 : ComponentSignature m
h1 = styled Html.h1

h2 : ComponentSignature m
h2 = styled Html.h2

h3 : ComponentSignature m
h3 = styled Html.h3

h4 : ComponentSignature m
h4 = styled Html.h4

h5 : ComponentSignature m
h5 = styled Html.h5

h6 : ComponentSignature m
h6 = styled Html.h6




div : ComponentSignature m
div = styled Html.div

p : ComponentSignature m
p = styled Html.p

hr : ComponentSignature m
hr = styled Html.hr

blockquote : ComponentSignature m
blockquote = styled Html.blockquote




span : ComponentSignature m
span = styled Html.span

a : ComponentSignature m
a = styled Html.a

code : ComponentSignature m
code = styled Html.code

br : ComponentSignature m
br = styled Html.br




img : ComponentSignature m
img = styled Html.img




button : ComponentSignature m
button = styled Html.button




section : ComponentSignature m
section = styled Html.section

nav : ComponentSignature m
nav = styled Html.nav

article : ComponentSignature m
article = styled Html.article

aside : ComponentSignature m
aside = styled Html.aside

header : ComponentSignature m
header = styled Html.header

footer : ComponentSignature m
footer = styled Html.footer

address : ComponentSignature m
address = styled Html.address

main_ : ComponentSignature m
main_ = styled Html.main_

body : ComponentSignature m
body = styled Html.body




figure : ComponentSignature m
figure = styled Html.figure

figcaption : ComponentSignature m
figcaption = styled Html.figcaption




fieldset : ComponentSignature m
fieldset = styled Html.fieldset

legend : ComponentSignature m
legend = styled Html.legend
