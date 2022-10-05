import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {
  const data = props.data;
  return (
    <section className="portfolio-section">
      <div>
        <Header data={data} />
        <Data data={data} />
        <Skill data={data} />
        <Project data={data} />
      </div>
    </section>
  );
}
function Header(props) {
  return (
    <div className="name header">
      <div>
        <h1>
          {props.data.nameKr}
          <span>{props.data.nameEn}</span>
        </h1>
        <h2>포트폴리오</h2>
      </div>
    </div>
  );
}
function Data(props) {
  let introduceList = [];
  props.data.introduce.simple.forEach((element, index) => {
    introduceList.push(<p key={index}>{element}</p>);
  });
  let obj = {};
  for (const key in props.data.contact) {
    obj[key] = (
      <li id={key}>
        <h3>{props.data.contact[key].address}</h3>
        <span>{props.data.contact[key].title}</span>
      </li>
    );
  }
  return (
    <div className="data">
      <div id="port-picture-box">
        <img
          id="picture"
          src={`./image/${props.data.faceImg.portfolio}`}
          alt={`${props.data.faceImg.portfolio}`}
        />
      </div>
      <div className="resume-contact-box">
        <div className="resume-box">
          <Link to="/resume" className="a-tag">
            <h3>
              {props.data.icon.resume}
              <span>클릭시 이력서로 이동합니다.</span>
            </h3>
          </Link>
          {introduceList}
        </div>
        <div className="contact-box">
          <ul>
            <h3>{props.data.icon.contact}</h3>
            {obj.email}
            {obj.phone}
            <a href={`${props.data.contact.github.address}`} target="_blank">
              {obj.github}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Skill(props) {
  let skillList = [];
  for (const key in props.data.icon) {
    if (
      key === "language" ||
      key === "markup" ||
      key === "FnL" ||
      key === "tool"
    ) {
      skillList.push(
        <ul key={`${key}`}>
          <h3>
            {props.data.icon[key].icon}
            {props.data.icon[key].text}
          </h3>
          {props.data.skill[key].map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      );
    }
  }
  return (
    <div className="portfolio-skill LIST">
      <h2>
        기술스택<span>Skill</span>
      </h2>
      <div>{skillList}</div>
    </div>
  );
}
function Project(props) {
  const arr = [];
  for (let i = 0; i < props.data.project.length; i++) {
    arr.push(0);
  }
  const [margin, setMargin] = useState(arr);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".slide-image")[
      index
    ].style.marginLeft = `${margin[index]}%`;
  }, [margin]);

  let projectList = [];
  props.data.project.forEach((element, index) => {
    const imgLength = element.img[1].length - 1;
    projectList.push(
      <div key={index}>
        <ul>
          <a href={`${element.address}`} target="_blank">
            <h3>
              {element.title}
              <span>클릭시 관련 Github로 이동합니다.</span>
            </h3>
          </a>
          <li className="slide-image-box">
            <div
              className="slide-image"
              style={{ width: `${100 * imgLength}%` }}>
              {element.img[1].map((img, index) => {
                return (
                  <img
                    key={index}
                    style={{ width: `${100 / imgLength}%` }}
                    src={`./image/${img}`}
                  />
                );
              })}
            </div>
            <div className="slide-control-box">
              <button
                type="button"
                onClick={() => {
                  setIndex(index);
                  let copy = [...margin];
                  if (0 <= margin[index]) {
                    copy[index] = 0;
                    setMargin(copy);
                  } else {
                    copy[index] = margin[index] + 100;
                    setMargin(copy);
                  }
                }}>
                prev
              </button>
              <button
                type="button"
                onClick={() => {
                  setIndex(index);
                  let copy = [...margin];
                  if (margin[index] <= -(100 * imgLength)) {
                    copy[index] = -(100 * imgLength);
                    setMargin(copy);
                  } else {
                    copy[index] = margin[index] - 100;
                    setMargin(copy);
                  }
                }}>
                next
              </button>
            </div>
          </li>
          <li className="project-description">
            <span>
              {element.content.map((content, contentKey) => {
                return (
                  <p key={contentKey}>
                    <span>{content.title}</span>
                    {content.text.map((text, textKey) => {
                      return <span key={textKey}>{text}</span>;
                    })}
                  </p>
                );
              })}
            </span>
            <span>
              <ul>
                {element.skill.map((skill, skillKey) => {
                  return <li key={skillKey}>{skill}</li>;
                })}
              </ul>
            </span>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="portfolio-project LIST">
      <h2>
        프로젝트<span>Project</span>
      </h2>
      {projectList}
    </div>
  );
}

export default Portfolio;
