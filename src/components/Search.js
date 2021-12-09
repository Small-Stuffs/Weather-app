import React, { useState } from 'react';

import styled from 'styled-components';

const SearchContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
  position: fixed;
  top: 0;
  left: 0px;
  padding: 20px 0;
  width: 350px;
  height: 100vh;
  background: #1e213a;
  z-index: 1;
  .stick {
    position: sticky;
    top: 0;
    left: 0;
    background: #1e213a;
    padding-bottom: 5px;
  }
  .close {
    text-align: right;
    font-size: 1.3rem;
    cursor: pointer;
  }
  form {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    .cover {
      flex-basis: 73%;
      padding: 0 12px;
      border: 1px solid #e7e7eb;
      background: transparent;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        height: 30px;
        background: transparent;
        border: 0;
        flex-basis: 85%;
        color: #e7e7eb;
        outline: none;
      }
    }
    button {
      padding: 10px;
      box-sizing: border-box;
      background: #3c47e9;
      border: 0;
      height: 40px;
      flex-basis: 25%;
      color: #e7e7eb;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 30px;
    li {
      padding: 15px 10px;
      margin-bottom: 10px;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li:hover {
      padding: 14px 10px;
      border: 1px solid #616475;
    }
  }
`;
const Search = () => {
  const close = () => {
    const search = document.querySelector('.search');
    search.classList.remove('slideOut');
    search.classList.add('slideIn');
  };
  return (
    <>
      <SearchContainer className="search">
        <div className="container">
          <div className="stick">
            <div className=" close" onClick={close}>
              <i className="fas fa-times" />
            </div>
            <form action="">
              <div className="cover">
                <i className="fas fa-search" />
                <input type="text" placeholder="Search location" />
              </div>
              <button>Search</button>
            </form>
          </div>
          <ul>
            <li>
              Tokyo
              <i className="fas fa-angle-right" />
            </li>
          </ul>
        </div>
      </SearchContainer>
    </>
  );
};

export default Search;
