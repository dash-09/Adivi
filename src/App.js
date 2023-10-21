import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
/* import Hero from "./components/Hero";
 */
import PostsByCategory from "./pages/PostsByCategory";
import Search from "./components/Search";
import SearchResult from "./pages/SearchResult";
import Article from "./pages/Article";
import Loading from "./components/Loading";
import { useMyContext } from "./context/store";
import Pagination from "./components/Pagination";
import ScrollButton from "./components/ScrollButton";
/* import NotFound from "./components/NotFound"; */
/* i have not written all the code of 'Not found page' */
 


const App = () => {
  const {loading, totalPage} = useMyContext();
  return (
    <>
      { loading && <Loading/>}
      <Header />
      <Search />
      {/* markdown for hero file the reare homepage */} 
      {/* <Hero /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:slug" element={<PostsByCategory />} />
          <Route path="/search/:slug" element={<SearchResult />} />
          <Route path="/article/:slug" element={<Article />} />
      {/*     <Route path="*" element={<NotFound />} /> */}
         
        </Routes>
      </main>
      <Pagination totalPage={ totalPage}/>
      <Footer />
      <ScrollButton/>
    </>
  );
};

export default App;
