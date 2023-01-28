import { Route, Routes } from "react-router-dom";
import HREFerPage from "./pages/HREFerPage/HREFerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          exact 
          path="/"
          element={
            <HREFerPage />
          }
        />
      </Routes>
      Ya
    </div>
  );
}

export default App;
