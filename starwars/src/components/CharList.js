import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';

export default function CharList() {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios
          .get(`https://lambda-swapi.herokuapp.com/api/people/`)
          .then(res => {
            setLists(res);
            console.log('Join the Dark Side', res)
          })
          .catch( error => {
            console.log('these are not the droids you are looking for', error)
          })
      }, [])
      
      return (
          <div className='info'> 
              {lists.map(list => {
                  return (
                    <CharCard 
                        key={list.id}
                        name={list.name}
                        height={list.height}
                        mass={list.mass}
                        birth_year={list.birth_year}
                    />
                  )
              })}
          </div>
      )
}