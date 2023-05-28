import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PageThree = React.lazy(() => import("pages/PageThree"));
const PageSeven = React.lazy(() => import("pages/PageSeven"));
const PageOne = React.lazy(() => import("pages/PageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pageseven" element={<PageSeven />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
