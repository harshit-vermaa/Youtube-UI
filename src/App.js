import React from "react";
import css from "./App.css";
import Header from "./Header";
import Sidebar from "./SibebarMenu/Sidebar";
import Videos from "./MainPageRecommodetionVideos/Videos";
import SearchPage from "./AfterSearchPage/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <Videos />
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route path="*" element={<strong>Error 404</strong>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
