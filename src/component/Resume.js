function Resume(props) {
  return (
    <section className="resume-section">
      <div>
        <div className="name header">
          <div>
            <h1>
              최 규 환<span>Choi KyuHwan</span>
            </h1>
            <h2>이력서</h2>
          </div>
        </div>
        <div className="data">
          <div className="picture-box">
            <img
              id="picture"
              src="./image/최규환_증명사진.jpg"
              alt="최규환_증명사진.jpg"
            />
          </div>
          <div className="license">
            <h2>License</h2>
            <ul>
              <li>
                <h3>웹디자인기능사</h3>
                <span>2021.12</span>
              </li>
              <li>
                <h3>지도제작기능사</h3>
                <span>2017.09</span>
              </li>
              <li>
                <h3>건설재료시험기능사</h3>
                <span>2017.07</span>
              </li>
              <li>
                <h3>정보처리기능사</h3>
                <span>2017.02</span>
              </li>
              <li>
                <h3>측량기능사</h3>
                <span>2016.09</span>
              </li>
            </ul>
          </div>
          <div className="contact-portfolio">
            <div className="contact">
              <h2>Contact</h2>
              <ul>
                <li id="email">
                  <h3>ckyuhwan1130@naver.com</h3>
                  <span>E-mail</span>
                </li>
                <li id="phone">
                  <h3>010-9929-6133</h3>
                  <span>Phone</span>
                </li>
              </ul>
            </div>
            <div className="portfolio">
              <h2>Portfolio</h2>
              <ul>
                <li id="portfolio">
                  <h3>포트폴리오 주소 예정</h3>
                  <span>Portfolio</span>
                </li>
                <li id="Github">
                  <h3>https://github.com/a2964573</h3>
                  <span>Github</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="introduce LIST">
          <h2>
            저를 소개합니다<span>Introduce</span>
          </h2>
          <p>
            "대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~"대충 나는 이런 사람이다"라는 글의
            내용~~"대충 나는 이런 사람이다"라는 글의 내용~~"대충 나는 이런
            사람이다"라는 글의 내용~~
          </p>
        </div>

        <div className="career LIST">
          <h2>
            경력사항<span>Career</span>
          </h2>
        </div>

        <div className="project LIST">
          <h2>
            프로젝트<span>Project</span>
          </h2>
        </div>

        <div className="skill LIST">
          <h2>
            기술<span>Skill</span>
          </h2>
          <ul className="markup">
            <li>html</li>
            <li>css</li>
          </ul>
          <ul className="script">
            <li>javascript</li>
          </ul>
          <ul className="library">
            <li>react</li>
          </ul>
        </div>

        <div className="education LIST">
          <h2>
            학력<span>Education</span>
          </h2>
          <ul>
            <li>
              <h3>
                신안산대학교<span>컴퓨터정보과(2, 3년)</span>
              </h3>
              <span>졸업</span>
            </li>
            <li>
              <h3>
                인천기계공업고등학교<span>도시건설정보과</span>
              </h3>
              <span>졸업</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
