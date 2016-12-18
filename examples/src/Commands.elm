module Commands exposing (..)

import Task
import Basics exposing (identity)

import Array exposing (Array)
import Http exposing (..)
import Json.Decode as Decode
import Json.Encode as Encode
import Messages exposing (..)
import LoadingResult exposing (..)

import Routing exposing (Route(..))
import Task

import Model exposing (..)
import Decoders exposing
  ( communicationDecoder
  , templateDecoder
  )

fetchForRoute : Model -> Route -> (Model, Cmd Messages.Msg )
fetchForRoute model route =
  case route of
      CommunicationsRoute ->
        ( { model
            | loadingStatus = Model.Loading
          }
        , Cmd.batch
          [ fetchCommunications
          , scrollToTop
          ]
        )

      CommunicationRoute id ->
        ( { model
            | loadingStatus = Model.Loading
            , communication = NotAsked
          }
        , Cmd.batch
          [ fetchCommunication id
          , scrollToTop
          ]
        )

      TemplatesRoute id ->
        ( { model
            | loadingStatus = Model.Loading
          }
        , Cmd.batch
          [ fetchCommunication id
          , fetchTemplates id
          , scrollToTop
          ]
        )

      _ ->
        ( { model
            | subTitle = Model.NoTitle
            , loadingStatus = Model.NotLoading
          }
        , Cmd.batch
          [ scrollToTop
          ]
        )


scrollToTop =
  let
    task =
      Dom.Scroll.toTop "main"

    process : Result Dom.Error () -> Msg
    process result =
      case result of
          Ok time ->
            Scrolled
          Err _ ->
            Scrolled
  in
      Task.attempt process task


fetch : String -> Decode.Decoder a -> (WebData a -> msg) -> Cmd msg
fetch url decoder msg =
  Http.send (fromResult >> msg) (Http.get ("http://localhost:4000/" ++ url) decoder)


fetchCommunications : Cmd Msg
fetchCommunications =
  fetch "communications" (Decode.list communicationDecoder) (CommunicationMsg << FetchedCommunications << sort .name)


--sort : (WebData (List Communication)) -> (WebData (List Communication))
sort sorter webData =
  case webData of
      Success items ->
        Success (List.sortBy sorter items)
      Failure error ->
        Failure error
      NotAsked ->
        NotAsked


fetchCommunication : CommunicationId -> Cmd Msg
fetchCommunication id =
  fetch ("communications/" ++ id) communicationDecoder (CommunicationMsg << FetchedCommunication)


fetchTemplates : CommunicationId -> Cmd Msg
fetchTemplates id =
  fetch ("communications/" ++ id ++ "/templates") (Decode.list templateDecoder) (TemplateMsg << FetchedTemplates << sort .name)
