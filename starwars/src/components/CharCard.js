import React from 'react';

const CharCard = props => {
    return (
        <div className = 'char-list' key ={props.id}>
            <h2> {props.name} </h2>
            <p> {props.height} </p>
            <p> {props.mass} </p>
            <p> {props.birth_year} </p>
        </div>
    )
}

export default CharCard;