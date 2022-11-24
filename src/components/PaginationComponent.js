import React, { useEffect, useState } from "react";
import RepoComponent from "./RepoComponent";

const PaginationComponent = (p) => {
  const { id, totalRepo } = p;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTotalPage(Math.ceil(totalRepo / 6));
    setLoad(true);
  }, [totalRepo]);
  let pageArray = [];
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(i);
  }
  const activePage = (pp) => {
    if (pp === page) {
      return "active";
    }
  };
  const handlePage = (e) => {
    if (e.target.id === "next") {
      if (page < totalPage) {
        setPage(page + 1);
      }
    } else if (e.target.id === "prev") {
      if (page > 1) {
        setPage(page - 1);
      }
    } else if (e.target.id === "first") {
      setPage(1);
    } else if (e.target.id === "last") {
      setPage(totalPage);
    } else {
      setPage(parseInt(e.target.id));
    }
  };
  return (
    <>
      {load && <RepoComponent id={id} page={page} />}
      <div className="m-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link shadow-none"
                id="first"
                onClick={handlePage}
              >
                &laquo;
              </button>
            </li>
            {pageArray.map((page) => (
              <li className="page-item" key={page}>
                <button
                  className={`page-link ${activePage(page)}`}
                  id={page}
                  onClick={handlePage}
                >
                  {page}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link shadow-none"
                id="last"
                onClick={handlePage}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-primary shadow-none me-5 rounded-pill"
            id="prev"
            onClick={handlePage}
            disabled={page === 1}
          >
            <i class="fas fa-long-arrow-alt-left"></i> Older
          </button>
          <button
            className="btn btn-outline-primary shadow-none rounded-pill ms-5"
            id="next"
            onClick={handlePage}
            disabled={page === totalPage}
          >
            Newer <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
