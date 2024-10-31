import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import DiscoverPage from "./pages/DiscoverPage";
import ShopsPage from "./pages/ShopsPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import SiteNavigation from "./components/SiteNavigation";

import SiteHeader from "./components/SiteHeader";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <>
      <Router>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/shops/:id" element={<StorePage />} />
          <Route path="/store/:shopName" element={<StorePage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Navigate to frontpage - If the page doesn't exist */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <SiteNavigation />
      </Router>
    </>
  );
}

export default App;
