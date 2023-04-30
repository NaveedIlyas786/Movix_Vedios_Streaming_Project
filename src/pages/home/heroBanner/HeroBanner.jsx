import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //! "useNavigate" is used to perform task  "to shift the searhing thing at URL location ::when we press "Enter" button after searching something in Input Field
import "./heroBannerstyle.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import  ContentWrapper  from "../../../components/contentWrapper/ContentWrapper";
import Lazyimg from "../../../components/lazyloadimage/Mylazyimg";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate(); //! here we create an instance of "useNavigate".
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        {!loading && <Lazyimg src={background} />}
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
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
