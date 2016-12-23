module Mdc.Html.Attributes
  exposing
  ( Property, Property (..)
  , style{-, property, attribute, map-}
  , class, classList, id{-, title, hidden-}
  {-, type_, value, defaultValue, checked, placeholder, selected-}
  {-, accept, acceptCharset, action, autocomplete, autofocus-}
  , disabled{-, enctype, formaction, list, maxlength, minlength, method, multiple-}
  {-, name, novalidate, pattern, readonly, required, size, for, form-}
  {-, max, min, step-}
  {-, cols, rows, wrap-}
  , href, target{-, download, downloadAs, hreflang, media, ping, rel-}
  {-, ismap, usemap, shape, coords-}
  , src{-, height, width, alt-}
  {-, autoplay, controls, loop, preload, poster, default, kind, srclang-}
  {-, sandbox, seamless, srcdoc-}
  {-, reversed, start-}
  {-, align, colspan, rowspan, headers, scope-}
  {-, async, charset, content, defer, httpEquiv, language, scoped-}
  {-, accesskey, contenteditable, contextmenu, dir, draggable, dropzone-}
  {-, itemprop, lang, spellcheck-}, tabindex, role
  {-, challenge, keytype-}
  {-, cite, datetime, pubdate, manifest-}

  , nop
  , when
  , attribute
  )

{-| Todo: https://github.com/fapian/elm-html-aria/blob/1.2.2/src/Html/Attributes/Aria.elm
-}
import String
import Html exposing (Attribute)
import Html.Attributes


type Property m
  = Attribute (Html.Attribute m)
  | Many (List (Property m))
  | None


attribute : Html.Attribute m -> Property m
attribute =
  Attribute


nop : Property m
nop =
  None


when : Property m -> Bool -> Property m
when prop guard =
    if guard then
        prop
    else
        nop


-- Attributes


style : List (String, String) -> Property m
style = Attribute << Html.Attributes.style



class : String -> Property m
class = Attribute << Html.Attributes.class

classList : List (String, Bool) -> Property m
classList = Attribute << Html.Attributes.classList

id : String -> Property m
id = Attribute << Html.Attributes.id




disabled : Bool -> Property m
disabled = Attribute << Html.Attributes.disabled




href : String -> Property m
href = Attribute << Html.Attributes.href

target : String -> Property m
target = Attribute << Html.Attributes.target




src : String -> Property m
src =
  Attribute << Html.Attributes.src




tabindex : Int -> Property m
tabindex =
  Attribute << Html.Attributes.tabindex



role : String -> Property m
role =
  Attribute << Html.Attributes.attribute "role"
