import { Link } from "react-router-dom";

function Home(props) {
  return (
    <section className="home-section">
      <div>
        <div className="name">
          <span>"꿈을 향해 점진적으로 성장하는 모코코"</span>
          <h1>
            최규환<span>Choi KyuHwan</span>
          </h1>
        </div>
        <div>
          <h2 className="link-box-title">About Me</h2>
          <div className="link-box">
            <div className="link">
              <Link to="/resume" className="a-tag">
                <p className="link-icon">{props.data.icon.resume}</p>
                <p>Resume</p>
              </Link>
              <p>웹 프론트엔드 개발직군에 지원하는 최규환입니다.</p>
              <p>장래에 풀스택 개발자가 되는 것이 희망입니다.</p>
            </div>
            <div className="link">
              <Link to="/portfolio" className="a-tag">
                <p className="link-icon">{props.data.icon.portfolio}</p>
                <p>Portfolio</p>
              </Link>
              <p>웹 프론트엔드 개발직군에 지원하는 최규환입니다.</p>
              <p>장래에 풀스택 개발자가 되는 것이 희망입니다.</p>
            </div>
            <div className="link">
              <a href={`${props.data.contact.github.address}`} target="_blank">
                <p className="link-icon">{props.data.icon.github}</p>
                <p>GitHub</p>
              </a>
              <p>웹 프론트엔드 개발직군에 지원하는 최규환입니다.</p>
              <p>장래에 풀스택 개발자가 되는 것이 희망입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
