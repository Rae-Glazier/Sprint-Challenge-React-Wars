import React, { useState, useEffect} from 'react';
import './App.css';
import CharList from './components/CharList';
import axios from 'axios';

export default function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const [lists, setLists] = useState([]);

  // useEffect(() => {
  //     axios
  //       .get(`https://lambda-swapi.herokuapp.com/api/people/`)
  //       .then(res => {
  //         setLists(res.data);
  //         console.log('Join the Dark Side', res)
  //       })
  //       .catch( error => {
  //         console.log('these are not the droids you are looking for', error)
  //       })
  //   }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharList />
    </div>
  );
}


