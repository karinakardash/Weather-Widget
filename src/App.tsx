import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { MonthStatistics } from "./pages/monthStatistics/MonthStatistics";

function App() {
  return (
    <div className="global-container">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MonthStatistics" element={<MonthStatistics />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
