// import "./App.css";
import MultiForms from "./MultiForms/MultiForms";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import About from "./Pages/About";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<Form />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>

      </BrowserRouter>
      {/* <div className="App">
        <div className="container m-auto">
          <MultiForms />
        </div>
      </div> */}
    </div>
  );
}

export default App;
