import React from 'react';
import location from '../images/location.svg';
import shower from '../images/Shower.png';
import { SideBar, MainContent } from '../styles/Main.styles';

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
