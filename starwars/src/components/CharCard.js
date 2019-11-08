import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 2px solid black;
    width: 400px;
    max-height: 350px;
    margin: 20px;
    overflow: hidden;
    padding: 5px;
    text-align: center;
`;

const HeroName = styled.h2`
    font-size: 30px;
    color: white;
    background: black;
`;
 
const Info = styled.p`
    font-size: 20px;
`;

const CharCard = props => {
    return (
        <Container key ={props.id}>
            <HeroName> {props.name} </HeroName>
            <Info> Height: {props.height} </Info>
            <Info> Mass: {props.mass} </Info>
            <Info> Birth Year: {props.birth_year} </Info>
        </Container>
    )
}

export default CharCard;