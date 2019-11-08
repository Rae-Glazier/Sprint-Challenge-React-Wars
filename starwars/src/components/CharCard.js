import React from 'react';

const CharCard = props => {
    return (
        <div className = 'char-list' key ={props.id}>
            <h2> {props.name} </h2>
            <p> Height: {props.height} </p>
            <p> Mass: {props.mass} </p>
            <p> Birth Year: {props.birth_year} </p>
        </div>
    )
}

export default CharCard;