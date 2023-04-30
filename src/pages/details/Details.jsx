import React from "react";
import "./detailstyle.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";  //!In React, useParams is a hook that allows you to extract parameters from the current URL. This can be useful when you want to render a component based on the value of a parameter in the URL, such as displaying details for a specific user or product
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSectionOfficial/VideosSection";
import Similars from "./carousels/Similars";
import Recommendation from "./carousels/Recommandations";

function Details() {
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`);
    const {data:credits, loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return (
  
  <div>
    <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    <Cast data={credits?.cast} loading={creditsLoading}/>
    <VideosSection data={data} loading={loading}/>
    <Similars mediaType={mediaType} id={id}/>
    <Recommendation mediaType={mediaType} id={id}/>
  </div>);

}

export default Details;
