import React from 'react';
import styled from "styled-components";

const CardContainer = styled.div `
    background-color: #363533;
    color: white;
    border-radius: 10px;
    height: 300px;
    width: 600px;
    font-family: "Dosis";
    font-weight: 500;
    font-size: 1.5em;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;

    a {
      color: #FCD33B;
  }
`

const ProfileImage = styled.img `
    height: 200px;
    width: auto;
    margin-top: 60px;
`
const ProfileInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

function UserCard(props) {
    return(
        <div>
            <CardContainer>
                <ProfileImage src={props.user.avatar_url} alt="Erica Girges with brown hair ponytail"/>
                <ProfileInfo>
                <h3>Name: {props.user.name}</h3>
                <h4>Location: {props.user.location}</h4>
                <h4>Public Repositories: {props.user.public_repos}</h4>
                <h4>Followers: {props.user.followers}</h4>
                <h4>Following: {props.user.following}</h4>
                <a href={props.user.html_url}>View Github Profile</a>
                </ProfileInfo>
            </CardContainer>
        </div>
    )
}

export default UserCard;