import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { PropagateLoader } from "react-spinners";
const RepoComponent = (p) => {
  const { id, page } = p;
  const [repo, setRepo] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://api.github.com/users/${id}/repos?per_page=6&page=${page}`,
          {
            method: "GET",
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        )
      ).json();
      setRepo(data);
      setLoad(true);
    };
    dataFetch();
  }, [page]);
  return (
    <div>
      {load ? (
        <div className="row gy-4 gx-5">
          {repo &&
            repo.map((repo) => <CardComponent repo={repo} key={repo.id} />)}
        </div>
      ) : (
        <div>
          <center>
            <PropagateLoader color="#0d6efd" size={30} />
          </center>
        </div>
      )}
    </div>
  );
};
export default RepoComponent;
