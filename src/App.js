import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import CastDetails from "./components/castDetails/CastDetails";

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
} from "react-router-dom";
import FullCast from "./components/pages/fullcast/FullCast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullcast" element={<FullCast />} />
        <Route path="/castDetails/:id" element={<CastDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
