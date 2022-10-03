function Portfolio(props) {
  const data = props.data;
  return (
    <section className="portfolio-section">
      <div>
        <Header data={data} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "8rem",
            boxShadow: "0 0.1rem #ddd",
          }}>
          <div
            style={{
              width: "25rem",
              height: "25rem",
              borderRadius: "12.5rem",
              overflow: "hidden",
              outline: "0.2rem solid #333",
            }}>
            <img
              style={{
                width: "100%",
                position: "relative",
                top: "70%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              id="picture"
              src={`./image/최규환_포트폴리오사진.jpg`}
              alt={`최규환_포트폴리오사진.jpg`}
            />
          </div>
          <div
            style={{
              width: "100%",
              padding: "1rem 0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <div
              style={{
                width: "30%",
                fontWeight: "bolder",
                outline: "0.2rem solid #333",
                padding: "1.5rem",
                borderRadius: "2rem",
                margin: "0 6rem",
              }}
              onClick={() => {
                props.setMode("RESUME");
              }}>
              <p style={{ fontSize: "2rem", listStyle: "none", padding: "0" }}>
                📜
                <span
                  style={{
                    fontSize: "1.2rem",
                    paddingLeft: "0.5rem",
                    color: "cornflowerblue",
                  }}>
                  클릭시 이력서로 이동합니다.
                </span>
              </p>
              <p
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "0.5rem",
                  fontSize: "1.4rem",
                  boxShadow: "0 0.1rem #ddd",
                }}>
                웹 프론트엔드 개발직군에 지원하는 최규환입니다.
              </p>
              <p
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "0.5rem",
                  fontSize: "1.4rem",
                  boxShadow: "0 0.1rem #ddd",
                }}>
                장래에 풀스택 개발자가 되는 것이 희망입니다.
              </p>
              <p
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "0.5rem",
                  fontSize: "1.4rem",
                  boxShadow: "0 0.1rem #ddd",
                }}>
                앞으로도 노력하겠으니 잘 부탁드립니다.
              </p>
            </div>
            <div
              style={{
                width: "30%",
                outline: "0.2rem solid #333",
                borderRadius: "2rem",
                padding: "1.5rem",
                margin: "0 6rem",
              }}>
              <ul
                style={{
                  width: "100%",
                }}>
                <li
                  style={{ fontSize: "2rem", listStyle: "none", padding: "0" }}>
                  🤙
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    listStyle: "none",
                    paddingTop: "1rem",
                    paddingBottom: "0.5rem",
                    boxShadow: "0 0.1rem #ddd",
                  }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                    }}>
                    ckyuhwan1130@naver.com
                  </h3>
                  <span
                    style={{
                      fontSize: "1.2rem",
                    }}>
                    E-mail
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    listStyle: "none",
                    paddingTop: "1rem",
                    paddingBottom: "0.5rem",
                    boxShadow: "0 0.1rem #ddd",
                  }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                    }}>
                    010-9929-6133
                  </h3>
                  <span
                    style={{
                      fontSize: "1.2rem",
                    }}>
                    Phone
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    listStyle: "none",
                    paddingTop: "1rem",
                    paddingBottom: "0.5rem",
                    boxShadow: "0 0.1rem #ddd",
                  }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                    }}>
                    https://github.com/a2964573
                  </h3>
                  <span
                    style={{
                      fontSize: "1.2rem",
                    }}>
                    GitHub
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="LIST">
          <h2>
            기술스택<span>Skill</span>
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-around",
              padding: "2rem 0",
            }}>
            <ul
              style={{
                width: "15%",
                fontWeight: "bolder",
                outline: "0.2rem solid #333",
                padding: "1.5rem",
                borderRadius: "2rem",
              }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "1.4rem",
                  paddingBottom: "1rem",
                }}>
                📕Language
              </li>
              <li
                style={{
                  padding: "0.5rem",
                  listStylePosition: "inside",
                  fontSize: "1.2rem",
                }}>
                JavaScript
              </li>
            </ul>
            <ul
              style={{
                width: "15%",
                fontWeight: "bolder",
                outline: "0.2rem solid #333",
                padding: "1.5rem",
                borderRadius: "2rem",
              }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "1.4rem",
                  paddingBottom: "1rem",
                }}>
                📗MarkUp
              </li>
              <li
                style={{
                  padding: "0.5rem",
                  listStylePosition: "inside",
                  fontSize: "1.2rem",
                }}>
                HTML
              </li>
              <li
                style={{
                  padding: "0.5rem",
                  listStylePosition: "inside",
                  fontSize: "1.2rem",
                }}>
                CSS
              </li>
            </ul>
            <ul
              style={{
                width: "15%",
                fontWeight: "bolder",
                outline: "0.2rem solid #333",
                padding: "1.5rem",
                borderRadius: "2rem",
              }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "1.4rem",
                  paddingBottom: "1rem",
                }}>
                📘Framework / Library
              </li>
              <li
                style={{
                  padding: "0.5rem",
                  listStylePosition: "inside",
                  fontSize: "1.2rem",
                }}>
                React
              </li>
            </ul>
            <ul
              style={{
                width: "15%",
                fontWeight: "bolder",
                outline: "0.2rem solid #333",
                padding: "1.5rem",
                borderRadius: "2rem",
              }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "1.4rem",
                  paddingBottom: "1rem",
                }}>
                📙Tool
              </li>
              <li
                style={{
                  padding: "0.5rem",
                  listStylePosition: "inside",
                  fontSize: "1.2rem",
                }}>
                GitHub
              </li>
            </ul>
          </div>
        </div>

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
function Project(props) {
  return (
    <div className="LIST" style={{ width: "100%" }}>
      <h2>
        프로젝트<span>Project</span>
      </h2>
      <div
        style={{
          display: "flex",
          padding: "2rem",
          width: "auto",
          boxShadow: "0 0.2rem #eee",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ul
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <li
            style={{
              fontSize: "2.2rem",
              fontWeight: "bolder",
              color: "lightsalmon",
              boxShadow: "0 0.2rem #ddd",
              listStyle: "none",
              padding: "1rem",
              paddingTop: "4rem",
            }}>
            서머너즈워-룬관리
            <span
              style={{
                fontSize: "1rem",
                color: "#333",
                paddingLeft: "1rem",
              }}>
              클릭시 관련 Github로 이동합니다.
            </span>
          </li>
          <li
            style={{
              width: "70%",
              overflow: "hidden",
              listStyle: "none",
              padding: "1rem",
              boxShadow: "0 0.2rem #f5f5f5",
              margin: "auto",
              paddingTop: "4rem",
            }}>
            <img
              style={{
                width: "100%",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              id={`project1`}
              src={`./image/프로젝트_룬관리.png`}
              alt="프로젝트_룬관리.png"
            />
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "1rem",
              boxShadow: "0 0.2rem #ddd",
              width: "auto",
            }}>
            <span
              style={{
                width: "100%",
                boxShadow: "0 0.2rem #f5f5f5",
              }}>
              <p
                style={{
                  width: "100$",
                  padding: "1.5rem 1rem",
                  fontSize: "1.6rem",
                  boxShadow: "0 0.2rem #f5f5f5",
                }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.8rem",
                    color: "cornflowerblue",
                    paddingBottom: "0.7rem",
                  }}>
                  제작 동기
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.25rem 0",
                    display: "block",
                  }}>
                  `사용자는 다른 프로그램을 이용하여 게임의 데이터를 JSON파일로
                  추출한 뒤 파일을 등록합니다.`
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.25rem 0",
                    display: "block",
                  }}>
                  `숫자로 된 각 목록을 클릭하면 페이지 전환을 할 수 있습니다.`
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.25rem 0",
                    display: "block",
                  }}>
                  `버튼을 이용하여 10단위로 페이지 전환합니다.`
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.25rem 0",
                    display: "block",
                  }}>
                  `버튼을 이용하여 목록의 끝으로 페이지 전환합니다.`
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.25rem 0",
                    display: "block",
                  }}>
                  `드롭다운 목록 중 10, 50, 100을 클릭하면 표시하는 룬의 개수가
                  각각 달라집니다.`
                </span>
              </p>
            </span>
            <span>
              <ul
                style={{
                  width: "100%",
                  boxShadow: "0 0.2rem #f5f5f5",
                  padding: "1rem 0",
                }}>
                <li
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                  }}>
                  html
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
