import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PageSeven = React.lazy(() => import("pages/PageSeven"));
const PageEightOne = React.lazy(() => import("pages/PageEightOne"));
const PageSevenOne = React.lazy(() => import("pages/PageSevenOne"));
const PageSix = React.lazy(() => import("pages/PageSix"));
const PageFive = React.lazy(() => import("pages/PageFive"));
const PageFour = React.lazy(() => import("pages/PageFour"));
const PageThreeOne = React.lazy(() => import("pages/PageThreeOne"));
const PageTwo = React.lazy(() => import("pages/PageTwo"));
const Fullwebsite = React.lazy(() => import("pages/Fullwebsite"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const CoverTwo = React.lazy(() => import("pages/CoverTwo"));
const Cover = React.lazy(() => import("pages/Cover"));
const PageEight = React.lazy(() => import("pages/PageEight"));
const PageSevenTwo = React.lazy(() => import("pages/PageSevenTwo"));
const PageSixOne = React.lazy(() => import("pages/PageSixOne"));
const PageFiveOne = React.lazy(() => import("pages/PageFiveOne"));
const PageFourOne = React.lazy(() => import("pages/PageFourOne"));
const PageThree = React.lazy(() => import("pages/PageThree"));
const PageOne = React.lazy(() => import("pages/PageOne"));
const FullwebsiteOne = React.lazy(() => import("pages/FullwebsiteOne"));
const PageTwoOne = React.lazy(() => import("pages/PageTwoOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FullwebsiteOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pagetwoone" element={<PageTwoOne />} />
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/pagefourone" element={<PageFourOne />} />
          <Route path="/pagefiveone" element={<PageFiveOne />} />
          <Route path="/pagesixone" element={<PageSixOne />} />
          <Route path="/pageseventwo" element={<PageSevenTwo />} />
          <Route path="/pageeight" element={<PageEight />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/covertwo" element={<CoverTwo />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/fullwebsite" element={<Fullwebsite />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/pagethreeone" element={<PageThreeOne />} />
          <Route path="/pagefour" element={<PageFour />} />
          <Route path="/pagefive" element={<PageFive />} />
          <Route path="/pagesix" element={<PageSix />} />
          <Route path="/pagesevenone" element={<PageSevenOne />} />
          <Route path="/pageeightone" element={<PageEightOne />} />
          <Route path="/pageseven" element={<PageSeven />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
