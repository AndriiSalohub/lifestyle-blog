import React from "react";
import "./App.css";
import { Header } from "containers/Header/Header";
import { Main } from "containers/Main/Main";
import { Footer } from "containers/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { HotArticles } from "pages/HotArticles/HotArticles";
import { LifestylePage } from "pages/LifestylePage/LifstylePage";
import { PeoplePage } from "pages/PeoplePage/PeoplePage";
import { PlacesPage } from "pages/PlacesPage/PlacesPage";
import { StoriesPage } from "pages/StoriesPage/StoriesPage";
import { ContactPage } from "pages/ContactPage/ContactPage";
import { AboutUsPage } from "pages/AboutUsPage/AboutUsPage";
import { AboutUsPageTitleImg } from "pages/AboutUsPage/AbouUsPageTitle";
import { ArticleList } from "components/ArticlesList/ArticlesList";

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header /> <LifestylePage /> <Main /> <Footer />
            </div>
          }
        />
        <Route
          path="/hot-articles"
          element={
            <div>
              <Header /> <HotArticles /> <ArticleList category="hot-articles" />{" "}
              <Footer />
            </div>
          }
        />
        <Route
          path="/people"
          element={
            <div>
              <Header /> <PeoplePage /> <ArticleList category="people" />{" "}
              <Footer />
            </div>
          }
        />
        <Route
          path="/places"
          element={
            <div>
              <Header /> <PlacesPage /> <ArticleList category="places" />{" "}
              <Footer />
            </div>
          }
        />
        <Route
          path="/stories"
          element={
            <div>
              <Header /> <StoriesPage /> <ArticleList category="stories" />{" "}
              <Footer />
            </div>
          }
        />
        <Route
          path="/about-us"
          element={
            <div>
              <Header /> <AboutUsPageTitleImg /> <AboutUsPage /> <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header /> <ContactPage /> <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
};
