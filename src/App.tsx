import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";

const PeoplePage = React.lazy(() => import("pages/PeoplePage"));
const PersonPAge = React.lazy(() => import("pages/PersonPage"));
const NoMatch = React.lazy(() => import("pages/NoMatch"));
const HomePage = React.lazy(() => import("pages/HomePage"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people/:pageId" element={<PeoplePage />} />
            <Route path="/person/:personId" element={<PersonPAge />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
