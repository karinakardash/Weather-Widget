import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./features/header/Header";
import { Popup } from "./features/popup/Popup";
import { Home } from "./pages/home/Home";
import { MonthStatistics } from "./pages/monthStatistics/MonthStatistics";

function App() {
  return (
    <div className="global-container">
      <Popup />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MonthStatistics" element={<MonthStatistics />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
