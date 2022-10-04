import "./App.css";
import "./style/home-style.css";
import "./style/navigator-style.css";
import "./style/resume-style.css";
import "./style/portfolio-style.css";
import { useState } from "react";
import Home from "./component/Home.js";
import Resume from "./component/Resume.js";
import Portfolio from "./component/Portfolio.js";
import data from "./data.js";

function App() {
  const [mode, setMode] = useState("HOME");
  let content;

  switch (mode) {
    case "HOME":
      content = <Home data={data} mode={mode} setMode={setMode} />;
      break;
    case "RESUME":
      content = <Resume data={data} mode={mode} setMode={setMode} />;
      break;
    case "PORTFOLIO":
      content = <Portfolio data={data} mode={mode} setMode={setMode} />;
      break;

    default:
      break;
  }

  return (
    <div className="body">
      <Navigator setMode={setMode} />
      {content}
    </div>
  );
}

function Navigator(props) {
  return (
    <div className="navigator">
      <ul>
        <li
          onClick={() => {
            props.setMode("HOME");
          }}>
          Home
        </li>
        <li
          onClick={() => {
            props.setMode("RESUME");
          }}>
          Resume
        </li>
        <li
          onClick={() => {
            props.setMode("PORTFOLIO");
          }}>
          Portfolio
        </li>
        <li>GitHub</li>
      </ul>
    </div>
  );
}

export default App;
