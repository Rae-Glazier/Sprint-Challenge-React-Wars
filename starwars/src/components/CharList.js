import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';

export default function CharList() {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios
          .get(`https://lambda-swapi.herokuapp.com/api/people/`)
          .then(res => {
            
            console.log('Join the Dark Side', res)
            setLists(res.data.results);
          })
          .catch( error => {
            console.log('these are not the droids you are looking for', error)
          })
      }, [])
    
      
      return (
          <div className='info'> 
              {lists.map((list, index) => {
                  return (
                    <CharCard 
                        key={index}
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