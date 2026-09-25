import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./heroBannerstyle.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { data } = useFetch("/movie/upcoming");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    if (data?.results?.length && url.backdrop) {
      const bg =
        url.backdrop +
        data.results[Math.floor(Math.random() * 20)]?.backdrop_path;
      setBackground(bg);
    }
  }, [data, url.backdrop]);

  const searchQueryHandler = (event) => {
    if (((event?.key === "Enter" || event === "searchButton") && query.length > 0) || event.button) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        {background && (
          <img src={background} alt="" fetchpriority="high" decoding="async" />
        )}
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore Now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or Tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={() => searchQueryHandler("searchButton")}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
