import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
const CardComponent = (p) => {
  const { repo } = p;
  const [lang, setLang] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const langFetch = async (languages_url) => {
      const data = await (
        await fetch(languages_url, {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        })
      ).json();
      setLang(Object.keys(data));
      setLoad(true);
    };
    langFetch(repo.languages_url);
  }, []);
  return (
    <div className="col-md-6">
      <div className="card border-dark h-100" key={repo.id}>
        <div className="card-body">
          <h5 className="card-title">
            <a
              href={repo.html_url}
              className="text-dark text-decoration-none"
              target="_blank"
            >
              {repo.name}
            </a>
          </h5>
          <h6 className="card-subtitle mb-3 text-muted pt-4">
            {repo.description ? repo.description : "No Description"}
          </h6>
          <p className="card-text pt-3">
            <p>
              {load ? (
                <>
                  {lang.map((language) => (
                    <div
                      class="d-inline p-1 m-1 text-bg-primary rounded-1"
                      key={language}
                    >
                      {language}
                    </div>
                  ))}
                </>
              ) : (
                <BarLoader color="#0d6efd" />
              )}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
