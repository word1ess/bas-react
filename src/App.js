import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import Layout from "./Components/Layout/Layout.jsx";
import Index from "./Components/Index/Index.jsx";
import Finger from "./Components/Finger/Finger";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isLoading={isLoading}
              handleLoading={handleLoading}
              setIsLoading={setIsLoading}
            />
          }
        >
          <Route
            index
            path="/"
            element={
              <Index isLoading={isLoading} handleLoading={handleLoading} />
            }
          />
          <Route
            path="/finger"
            element={
              <Finger isLoading={isLoading} handleLoading={handleLoading} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
