function Resume(props) {
  const data = props.data;
  return (
    <section className="resume-section">
      <div>
        <Header data={data} />
        <Data data={data} />
        <Introduce data={data} />
        <Project data={data} />
        <Skill data={data} />
        <Education data={data} />
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
        <h2>이력서</h2>
      </div>
    </div>
  );
}
function Data(props) {
  let licenseList = [];
  props.data.license.forEach((element, index) => {
    licenseList.push(
      <li key={index}>
        <h3>{element.name}</h3>
        <span>{element.data}</span>
      </li>
    );
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
      <div className="picture-box">
        <img
          id="picture"
          src={`./image/${props.data.faceImg}`}
          alt={`${props.data.faceImg}`}
        />
      </div>
      <div className="license">
        <h2>License</h2>
        <ul>{licenseList}</ul>
      </div>
      <div className="contact-portfolio">
        <div className="contact">
          <h2>Contact</h2>
          <ul>
            {obj.email}
            {obj.phone}
          </ul>
        </div>
        <div className="portfolio">
          <h2>Portfolio</h2>
          <ul>
            {obj.portfolio}
            {obj.github}
          </ul>
        </div>
      </div>
    </div>
  );
}
function Introduce(props) {
  return (
    <div className="introduce LIST">
      <h2>
        저를 소개합니다<span>Introduce</span>
      </h2>
      <p>{props.data.introduce}</p>
    </div>
  );
}
function Project(props) {
  let projectList = [];
  props.data.project.forEach((element, index) => {
    projectList.push(
      <div key={index}>
        <ul>
          <li>
            {element.title}
            <span>클릭시 관련 Github로 이동합니다.</span>
          </li>
          <li>
            <img
              id={`project${index}`}
              src={`./image/${element.img}`}
              alt={element.img}
            />
          </li>
          <li>
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
    <div className="project LIST">
      <h2>
        프로젝트<span>Project</span>
      </h2>
      {projectList}
    </div>
  );
}
function Skill(props) {
  let skillList = [];
  props.data.skill.forEach((element, index) => {
    skillList.push(<li key={index}>{element}</li>);
  });

  return (
    <div className="skill LIST">
      <h2>
        기술<span>Skill</span>
      </h2>
      <ul>{skillList}</ul>
    </div>
  );
}
function Education(props) {
  let educationList = [];
  for (const key in props.data.education) {
    educationList.unshift(
      <li key={key}>
        <h3>
          {props.data.education[key].name}
          <span>
            {props.data.education[key].department}
            {props.data.education[key].degree ? (
              props.data.education[key].degree
            ) : (
              <></>
            )}
          </span>
        </h3>
        <span>{props.data.education[key].status}</span>
      </li>
    );
  }

  return (
    <div className="education LIST">
      <h2>
        학력<span>Education</span>
      </h2>
      <ul>{educationList}</ul>
    </div>
  );
}

export default Resume;
