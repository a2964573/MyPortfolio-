import "./App.css";
import { useState } from "react";
import Home from "./component/Home.js";
import Resume from "./component/Resume.js";
import data from "./data.js";

function App() {
  const [mode, setMode] = useState("HOME");
  let content;

  switch (mode) {
    case "HOME":
      content = <Home data={data} />;
      break;
    case "RESUME":
      content = <Resume data={data} />;
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
        <li>🏠</li>
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
        <li>Portfolio</li>
        <li>GitHub</li>
        <li>⚙️</li>
      </ul>
    </div>
  );
}

export default App;
