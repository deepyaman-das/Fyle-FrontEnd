import React from "react";
import PaginationComponent from "./PaginationComponent";
const UserDetailsComponent = (p) => {
  const { user } = p;
  return (
    <div className="container pt-3">
      <div className="row align-items-center">
        <div className="col col-lg-2">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="rounded-circle img-thumbnail"
          />
        </div>
        <div className="col">
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <p>
            <i className="fas fa-map-marker-alt"></i> {user.location}
          </p>
          <p>
            Twitter:
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              className="text-dark text-decoration-none"
            >
              {" "}
              {`https://twitter.com/${user.twitter_username}`}
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-3">
          <p className="pt-3">
            <i className="fab fa-github"></i>
            <a href={user.github_url} className="text-dark text-decoration-none">
              {" "}
              {user.github_url}
            </a>
          </p>
        </div>
      </div>
      <PaginationComponent id={user.login} totalRepo={user.public_repos}/>
    </div>

  );
};
export default UserDetailsComponent;
