import React, { useEffect, useState } from "react";
const CardComponent = (p) => {
  const { repo } = p;
  const [lang, setLang] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const langFetch = async (languages_url) => {
      const data = await (await fetch(languages_url, {
        method: "GET",
        headers: {
            'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })).json();
      setLang(Object.keys(data));
      setLoad(true);
    };
    langFetch(repo.languages_url);
  }, []);
  return (
    <div className="col-md-6">
      <div className="card" key={repo.id}>
        <div className="card-body">
          <h5 className="card-title" ><a href={repo.html_url} className="text-dark text-decoration-none">{repo.name}</a></h5>
          <h6 className="card-subtitle mb-2 text-muted">{repo.description?repo.description:"No Description"}</h6>
          <p className="card-text">
            <p>
                {load ? (
                    <>
                    {lang.map((language)=>(
                        <div class="d-inline bg-primary text-white rounded" key={language}>{language}</div>
                    ))}
                    </>
                ) : (
                    <span className="d-inline bg-primary text-white rounded">Loading...</span>
                )}

            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
