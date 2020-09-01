import React from 'react';

function UserCard(props) {
    return(
        <div>
            <div>
                <img src={props.user.avatar_url} alt="Erica Girges with brown hair ponytail"/>
                <h3>Name: {props.user.name}</h3>
                <h4>Location: {props.user.location}</h4>
                <h4>Followers: {props.user.followers}</h4>
                <h4>Following: {props.user.following}</h4>
            </div>

        </div>
    )
}

export default UserCard;