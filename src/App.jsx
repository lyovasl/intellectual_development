import { Route, Router, Routes } from "react-router";
import "./App.css";
import Main from "./layouts/Main";

function App() {
  return (
    <>
      <Router>
        <div className="w">
          <Routes>
            <Route path="/">
              <Main />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
