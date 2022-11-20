import React from "react";
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
            <i class="fas fa-map-marker-alt"></i> {user.location}
          </p>
          <p>
            Twitter:
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              class="text-dark text-decoration-none"
            >
              {" "}
              {`https://twitter.com/${user.twitter_username}`}
            </a>
          </p>
        </div>

        <p>
          <i class="fab fa-github"></i>
          <a href={user.github_url} class="text-dark text-decoration-none">
            {" "}
            {user.github_url}
          </a>
        </p>
      </div>
    </div>
  );
};
export default UserDetailsComponent;
