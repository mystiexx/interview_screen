import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/Dashboard";
import Clients from "./app/Clients";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
