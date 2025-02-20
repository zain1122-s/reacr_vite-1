import React from "react";

import { BrowserRouter as router, Routes, Route } from "react-router"
import Button from "./components/button";

function App() {
  return (
    <>
     
        <Routes>

          <Route path="/" element={<Button/>} />
        </Routes>
      
    </>
  );
}

export default App;