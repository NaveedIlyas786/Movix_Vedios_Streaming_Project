import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux"; //! We import " useSelector, useDispatch " from our redux-store
import { getApiConfiguration,getGenres } from "./store/homeslice";
import HeroBanner from "./pages/home/heroBanner/HeroBanner";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Pagenotfound from "./pages/404/Pagenotfound";
//! Now here We Will import routers ⇓⇓⇓ so that we are able to access to go other page-components
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home); //! In  " useSelector " there will be a call back function where we will get our store

  //! Function ⇓ ⇓
  const fetchAPiConfiguration = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  //! Hook ⇓ ⇓
  useEffect(() => {
    fetchAPiConfiguration();
    genresCall()
  }, []);


  const genresCall=async()=>{
   let promises=[];
   let endPoints=["tv","movie"]
   let allGenres={}

   endPoints.forEach((url)=>{
    return promises.push(fetchDataFromApi(`/genre/${url}/list`))
   })

   const data=await Promise.all(promises)
   console.log(data);
   data.map(({genres})=>{
    return genres.map((item)=>(allGenres[item.id])=item)
   })
   dispatch(getGenres(allGenres))
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        {/*To Save its path ↟↟ "mediaType" represents the media category "Movie or TV-Show" in URL, with specific category element id */}
        <Route path="/search/:query" element={<SearchResult />} />
        {/*It will run ↟↟ "search" for searching, and "query" means "what are we searching about?"  */}
        <Route path="/explore/:mediaType" element={<Explore />} />
        {/*It will run ↟↟ "explore" section with mediaType means " Which category we have chosen "  */}
        <Route path="*" element={<Pagenotfound />} />
        {/* Here ↟↟ (*) means if user search any item which is not reletd to our existing routes then show "Page not Found " Page */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
Movix_Vedios_Streaming_Project