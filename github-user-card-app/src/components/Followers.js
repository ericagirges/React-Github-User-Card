import React from "react";
import styled from "styled-components";

const AllFollowers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 100px;
`;

const FollowerContainer = styled.div`
  margin-top: 40px;
  width: 300px;
  height: 300px;
  background-color: #363533;
  font-family: "Dosis";
  font-weight: 500;
  color: white;
  font-size: 1.4em;
  padding: 20px;
  border-radius: 10px;

  a {
      color: #FCD33B;
  }
`;

const FollowerImage = styled.img`
  width: 200px;
  height: auto;
  margin-top: 20px;
`;

const Followers = (props) => {
  return (
    <AllFollowers>
      {props.followers.map((follower) => {
        return (
          <FollowerContainer>
            <FollowerImage
              src={follower.avatar_url}
              alt="follower profile avatar"
            />
            <h3>Username: {follower.login}</h3>
            <a href={follower.html_url}>View Github Profile</a>
          </FollowerContainer>
        );
      })}
    </AllFollowers>
  );
};

export default Followers;
