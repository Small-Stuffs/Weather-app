import styled from 'styled-components';

export const SideBar = styled.div`
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

export const MainContent = styled.div`
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
