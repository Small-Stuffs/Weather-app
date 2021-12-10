import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchList from './SearchList';

import { SearchContainer } from '../styles/Search.styles';

import useForecast from '../hooks/useForecast';

const locationList = [
  {
    woeid: '355',
    title: 'manila',
  },
  {
    woeid: '5153',
    title: 'berlin',
  },
];

const Search = ({ setWoeid }) => {
  // input
  const [text, setText] = useState('');
  //location
  const [locations, setLocations] = useState(locationList);

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

  const addLocation = (location) => {
    const newLocation = [location, ...locations];
    setLocations(newLocation);
    console.log(...locations);
  };
  function handleSubmit(e) {
    e.preventDefault();
    setText('');

    // setWoeid.onSubmit({
    //   id: 100,
    //   text: text,
    // });
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  // function handleAdd() {
  //   // const newLocation = locations.concat({ text, id: uuidv4() });
  //   // setLocations(newLocation);
  //   setText('');
  // }

  // const change = (woeid) => {
  //   // setWoeid(woeid);
  //   const search = document.querySelector('.search');.
  //   search.classList.remove('slideOut');
  //   search.classList.add('slideIn');
  // };

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
            <form action="" onSubmit={handleSubmit}>
              <div className="cover">
                <i className="fas fa-search" />
                <input
                  type="text"
                  placeholder="Search location"
                  required
                  value={text}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" onClick={search} onSubmit={handleSubmit}>
                Search
              </button>
            </form>
          </div>
          <SearchList />
        </div>
      </SearchContainer>
    </>
  );
};

export default Search;
