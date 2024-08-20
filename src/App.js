import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Index from "./Components/Index/Index.jsx";
import Finger from "./Components/Finger/Finger";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Index />} />
          <Route path="/finger" element={<Finger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
