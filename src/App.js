import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Index from "./Components/Index/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
