import React from 'react';
import styled from "styled-components";

const CardContainer = styled.div `
    background-color: #363533;
    color: white;
    border-radius: 10px;
    height: 500px;
    width: 300px;
    font-family: "Dosis";
    font-weight: 500;
    font-size: 1.5em;
`

const ProfileImage = styled.img `
    height: 200px;
    width: auto;
    margin-top: 60px;
`

function UserCard(props) {
    return(
        <div>
            <CardContainer>
                <ProfileImage src={props.user.avatar_url} alt="Erica Girges with brown hair ponytail"/>
                <h3>Name: {props.user.name}</h3>
                <h4>Location: {props.user.location}</h4>
                <h4>Followers: {props.user.followers}</h4>
                <h4>Following: {props.user.following}</h4>
            </CardContainer>
            <CardContainer>
                
            </CardContainer>

        </div>
    )
}

export default UserCard;