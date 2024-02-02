import "./App.css";
import Main from "../src/layouts/Main";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/about"
          exact
          element={
            <Main>
              <About />
            </Main>
          }
        />
        <Route
          path="/"
          exact
          element={
            <Main>
              <Home />
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
