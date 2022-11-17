import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetailsComponent = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
            `https://api.github.com/users/${id}`
        )
      ).json();

      setUser(data);
    };

    dataFetch();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default UserDetailsComponent;
