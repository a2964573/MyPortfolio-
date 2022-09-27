function Resume(props) {
  return (
    <section className="resume-section">
      <div>
        <div className="name">
          <div>
            <h1>
              최 규 환 <span>Choi KyuHwan</span>
            </h1>
            <h2>이력서</h2>
          </div>
        </div>
        <div className="picture-box">
          <img
            id="picture"
            src="./image/최규환_증명사진.jpg"
            alt="최규환_증명사진.jpg"
          />
        </div>
        <p id="birth">1999.11.30</p>
        <p id="address">주소지: 인천시 남구 숭의동</p>
      </div>
    </section>
  );
}

export default Resume;
