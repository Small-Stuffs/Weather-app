import React, { useState } from 'react';

import { SearchContainer } from '../styles/Search.styles';

const Search = ({ setWoeid }) => {
  const [text, setText] = useState('');
  const [locations, setLocations] = useState([]);

  const search = () => {
    // setLoading(true);
    fetch(
      `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${text}`
    )
      .then(async (res) => {
        const data = await res.json();
        console.log('location', data);
        console.log(text);
        // setLoading(false);
        setLocations(data);
      })
      .catch('err');
  };

  const change = (woeid) => {
    setWoeid(woeid);
    const search = document.querySelector('.search');
    search.classList.remove('slideOut');
    search.classList.add('slideIn');
  };

  //OPEN CLOSE SEARCHBAR
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
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="cover">
                <i className="fas fa-search" />
                <input
                  type="text"
                  placeholder="Search location"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <button type="submit" onClick={search}>
                Search
              </button>
            </form>
          </div>
          <ul>
            {locations.map((location) => (
              <li key={location.woeid} onClick={() => change(location.woeid)}>
                {location.title}
                <i className="fas fa-angle-right"></i>
              </li>
            ))}
          </ul>
        </div>
      </SearchContainer>
    </>
  );
};

export default Search;
