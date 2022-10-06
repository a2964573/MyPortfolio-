import { Link } from "react-router-dom";

function Home(props) {
  const data = props.data;
  return (
    <section className="home-section">
      <div>
        <Header data={data} />
        <About data={data} />
      </div>
    </section>
  );
}
function Header(props) {
  return (
    <div className="name">
      <span>{props.data.introduce.oneline}</span>
      <h1>
        {props.data.nameKr}
        <span>{props.data.nameEn}</span>
      </h1>
    </div>
  );
}
function About(props) {
  let obj = {};
  for (const key in props.data.introduce) {
    if (key === "resume" || key === "portfolio" || key === "github") {
      let introList = [];
      props.data.introduce[key].map((element, index) => {
        introList.push(<p key={index}>{element}</p>);
        return introList;
      });
      obj[key] = introList;
    }
  }
  let divList = [];
  ["resume", "portfolio", "github"].forEach((element, index) => {
    let iconImg, object;
    switch (element) {
      case "resume":
        iconImg = props.data.icon.resume;
        object = obj.resume;
        break;
      case "portfolio":
        iconImg = props.data.icon.portfolio;
        object = obj.portfolio;
        break;
      case "github":
        iconImg = props.data.icon.github;
        object = obj.github;
        break;
    }
    divList.push(
      <div className="link" key={index}>
        <Link to={`/${element}`} className="a-tag">
          <p className="link-icon">{iconImg}</p>
          <p>{element}</p>
        </Link>
        {object}
      </div>
    );
  });
  return (
    <div>
      <h2 className="link-box-title">About Me</h2>
      <div className="link-box">{divList}</div>
    </div>
  );
}
export default Home;
