import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetailsComponent from "./UserDetailsComponent";
import { RingLoader } from "react-spinners";

const LaodingComponent = () => {
  const { id } = useParams();
  useEffect(() => {
    if (id) dataFetch();
  }, []);
  const [user, setUser] = useState({
    login: "",
    name: "",
    bio: "",
    avatar_url: "",
    location: "",
    twitter_username: "",
    github_url: "",
    load: false,
    public_repos: 0,
  });
  const dataFetch = async () => {
    const data = await (
      await fetch(`https://api.github.com/users/${id}`, {
        method: "GET",
        headers: {
          authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
    ).json();

    setUser({
      login: data.login,
      name: data.name,
      bio: data.bio ? data.bio : "No Bio",
      avatar_url: data.avatar_url,
      location: data.location ? data.location : "No Location",
      twitter_username: data.twitter_username,
      github_url: data.html_url,
      load: true,
      public_repos: data.public_repos,
    });
  };
  return (
    <>
      {user.load ? (
        user.login ? (
          <UserDetailsComponent user={user} />
        ) : (
          <>
            <div class="position-absolute top-50 start-50 translate-middle">
              <h1>User Not Found</h1>
            </div>
          </>
        )
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle">
          <RingLoader color="#0d6efd" size={200} />
        </div>
      )}
    </>
  );
};

export default LaodingComponent;
