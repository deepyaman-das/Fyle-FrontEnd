import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetailsComponent from "./UserDetailsComponent";

const LaodingComponent = () => {
  const { id } = useParams();
  useEffect(() => {
    if(id)
      dataFetch();
  }, []);
  const [user, setUser] = useState({
    login: "",
    name: "",
    bio: "",
    avatar_url: "",
    location: "",
    twitter_username: "",
    github_url: "",
    load: false
  });  
  const dataFetch = async () => {
      const data = await (
        await fetch(
            `https://api.github.com/users/${id}`,{
              method: "GET",
            headers: {
              authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
          }
        )
      ).json();

      setUser({
        login: data.login,
        name: data.name,
        bio: data.bio,
        avatar_url: data.avatar_url,
        location: data.location,
        twitter_username: data.twitter_username,
        github_url: data.html_url,
        load: true
      });
    };
  return (
    <div>
    {user.load ? (
      user.login ?(
        <UserDetailsComponent user={user} />
      ) : (
        <div>
          <center>
            <h1>User Not Found</h1>
          </center>
        </div>
      )
    ) : (
      <div>
        <center>
          <h1>Loading...</h1>
        </center>
      </div>
      )}
    </div>
  );
};

export default LaodingComponent;
