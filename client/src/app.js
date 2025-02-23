// import React from "react";
import { BrowserRouter, Route, Routes,  } from "react-router";

import MainLayout from "./components/Common/MainLayout/MainLayout";
import HomePage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
