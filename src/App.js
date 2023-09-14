import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard isLogin={isLogin} />} />
        <Route path="/" element={<Login checkLogin={setIsLogin} />} />
      </Routes>
    </>
  );
}

export default App;
