import React from 'react';
import location from '../images/location.svg';
import shower from '../images/Shower.png';
import styled from 'styled-components';

const SideBar = styled.div`
@media(max-width: 600px) {
  position:relative;
  width:100%
}
  position: fixed;
  top: 0;
  left: 0;
  background: #1e213a;
  width: 21.875rem;
  height: 100vh;
  padding: 2.1875rem 0;
  overflow: hidden;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    button,
    .loc {
      color: #e7e7eb;
      background: #6e707a;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .loc {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .bottom {
    position: relative;
    height: 100%;
    .weather {
      text-align: center;
      img {
        width: 150px;
        margin: 60px 0 0px;
      }
      .temp {
        margin-bottom: 30px;
        .num {
          font-size: 9rem;
          font-weight: 500;
        }
      }
    .date {
      margin: 1rem 0;
      display: flex;
      color: #a09fb1;
      justify-content: center;
    }
    .date p:nth-child(2) {
      margin: 0 0.8rem;
    }
  }
`;

const MainContent = styled.div`
  @media (max-width: 600px) {
    padding-left: 0;
  }
  padding-left: 21.875rem;
  padding-top: 1.6rem;
  .top {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      grid-gap: 20px;
      li,
      img,
      .date {
        margin-top: 15px;
      }
      li {
        background: #1e213a;
        text-align: center;
        padding: 15px;
        img {
          width: 60px;
        }
        .date {
          font-size: 15px;
        }
        .min-max {
          margin-top: 23px;
          font-weight: 600;
          .max {
            margin-right: 17px;
            // color: #e7e7eb;
          }
          .min {
            color: #a09fb1;
          }
        }
      }
    }
  }
  .bottom {
    margin-top: 55px;

    h2 {
      margin-bottom: 1rem;
    }
    .stat {
      text-align: center;
      padding: 18px;
      background: #1e213a;

      margin-bottom: 1rem;
      .title {
        font-size: 18px;
        margin: 15px 0;
      }
      .value {
        margin-bottom: 14px;
        font-size: 64px;
        font-weight: 600;

        span {
          font-size: 2rem;
        }
      }
    }
    .grid1 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      grid-gap: 30px;
      padding-bottom: 15px;
    }
    .grid2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 30px;
    }
  }
  .progressNum {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .progressBar {
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: #e7e7eb;
    margin: 4px 0;
    .progress {
      width: 50%;
      height: 8px;
      border-radius: 5px;
      background: #ffec65;
    }
  }
`;
const Main = () => {
  const open = () => {
    const search = document.querySelector('.search');
    search.classList.add('slideOut');
    search.classList.remove('slideIn');
  };
  return (
    <>
      <SideBar>
        <div className="top">
          <button onClick={open}>Search for places</button>
          <span className="loc">
            <img src={location} alt="" />
          </span>
        </div>
        <div className="bottom">
          <div className="clouds"></div>
          <div className="weather">
            <img src={shower} alt="" />
            <div className="temp">
              <span className="num">15</span>
              <span className="deg">&deg;C</span>
            </div>
            <p className="type">Shower</p>
            <div className="date">
              <p>Today</p>
              <p>•</p>
              <p>Fri, 5 Jun</p>
            </div>
            <p className="place">Helsinki</p>
          </div>
        </div>
      </SideBar>
      <MainContent>
        <div className="top">
          <div className="container">
            <div className="cel-fah">
              <span className="cel">&deg;C</span>
              <span className="fah">&deg;F</span>
            </div>
            <ul>
              <li>
                <p className="date">Sat, 6 Jun</p>
                <img src={shower} />
                <div className="min-max">
                  <span className="max">
                    16<span>&deg;C</span>
                  </span>
                  <span className="min">
                    11<span>&deg;C</span>
                  </span>
                </div>
              </li>
              <li>
                <p className="date">Sat, 6 Jun</p>
                <img src={shower} />
                <div className="min-max">
                  <span className="max">
                    16<span>&deg;C</span>
                  </span>
                  <span className="min">
                    11<span>&deg;C</span>
                  </span>
                </div>
              </li>
              <li>
                <p className="date">Sat, 6 Jun</p>
                <img src={shower} />
                <div className="min-max">
                  <span className="max">
                    16<span>&deg;C</span>
                  </span>
                  <span className="min">
                    11<span>&deg;C</span>
                  </span>
                </div>
              </li>
              <li>
                <p className="date">Sat, 6 Jun</p>
                <img src={shower} />
                <div className="min-max">
                  <span className="max">
                    16<span>&deg;C</span>
                  </span>
                  <span className="min">
                    11<span>&deg;C</span>
                  </span>
                </div>
              </li>
              <li>
                <p className="date">Sat, 6 Jun</p>
                <img src={shower} />
                <div className="min-max">
                  <span className="max">
                    16<span>&deg;C</span>
                  </span>
                  <span className="min">
                    11<span>&deg;C</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <h2>Todays Highlights</h2>
            <div className="grid1">
              {/* WIND */}
              <div className="stat">
                <p className="title">Wind status</p>
                <p className="value">
                  65
                  <span>mph</span>
                </p>
                <p className="compass">
                  <i className="fas fa-compass"></i>
                  WSW
                </p>
              </div>
              {/* HUMIDITY */}
              <div className="stat">
                <p className="title">Humidity</p>
                <p className="value">
                  84
                  <span>%</span>
                </p>
                <div className="progressWrapper">
                  <div className="progressNum">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="progressBar">
                    <div className="progress"></div>
                  </div>
                  <span>%</span>
                </div>
              </div>
            </div>
            <div className="grid2">
              {/* VISIBILITY */}
              <div className="stat">
                <p className="title">Visibility</p>
                <p className="value">
                  6,4
                  <span>miles</span>
                </p>
              </div>
              {/* AIR PRESSURE */}
              <div className="stat ">
                <p className="title">Air pressure</p>
                <p className="value">
                  998
                  <span>mb</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default Main;
