import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";

import HomePageView from "../pages/HomePage/HomePageView";
import SearchPageView  from "../pages/SearchPage/SearchRageView";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomePageView/>} />
      <Route path={ROUTE_NAMES.SEARCH_PAGE} element={<SearchPageView/>} />
    </Routes>
  );
};