import React, { Suspense } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Layout } from "components/Layout";

const PeoplePage = React.lazy(() => import("pages/PeoplePage"));
const PersonPage = React.lazy(() => import("pages/PersonPage"));
const NoMatch = React.lazy(() => import("pages/NoMatch"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const PageRTK = React.lazy(() => import("pages/PageRTK"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people/:pageId" element={<PeoplePage />} />
            <Route path="/person/:personId" element={<PersonPage />} />
            <Route path="/rtk" element={<Navigate to={"/rtk/1"} />} />
            <Route path="/rtk/:pageId" element={<PageRTK />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
