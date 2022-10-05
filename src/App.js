import "./style/home-style.css";
import "./style/navigator-style.css";
import "./style/resume-style.css";
import "./style/portfolio-style.css";
import "./App.css";
import Home from "./component/Home.js";
import Resume from "./component/Resume.js";
import Portfolio from "./component/Portfolio.js";
import data from "./data.js";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Navigator />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/resume" element={<Resume data={data} />} />
        <Route path="/portfolio" element={<Portfolio data={data} />} />
      </Routes>
    </div>
  );
}

function Navigator() {
  return (
    <div className="navigator">
      <ul>
        <Link to="/" className="a-tag">
          <li>Home</li>
        </Link>
        <Link to="/resume" className="a-tag">
          <li>Resume</li>
        </Link>
        <Link to="/portfolio" className="a-tag">
          <li>Portfolio</li>
        </Link>
        <a href="https://github.com/a2964573" target={"_blank"}>
          <li>GitHub</li>
        </a>
      </ul>
    </div>
  );
}

export default App;
