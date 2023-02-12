import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import HREFerPage from "./pages/HREFerPage/HREFerPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage />
          }
        />
        <Route 
          exact 
          path="/hrefer"
          element={
            <HREFerPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
