import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DiscoverPage from "./pages/DiscoverPage";
import StorePage from "./pages/StorePage";
import ShopsPage from "./pages/ShopsPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import SiteNavigation from "./components/SiteNavigation";

import SiteHeader from "./components/SiteNavigation";

function App() {
  return (
    <>
      <SiteHeader />
      <Router>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/shops/:id" element={<StorePage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
      <SiteNavigation />
    </>
  );
}

export default App;
