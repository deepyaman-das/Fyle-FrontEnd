import React ,{ useEffect, useState }from "react";
import RepoComponent from "./RepoComponent";

const PaginationComponent = (p) => {
    const{id, totalRepo} = p;
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTotalPage(Math.ceil(totalRepo/6));
        setLoad(true);
        console.log(totalPage);
    }, [totalRepo]);
    return (
        <div>
            {load ? (
                <div>
                    <RepoComponent id={id} page={page}/>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-primary" onClick={()=>setPage(page-1)} disabled={page===1}>Previous</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary" onClick={()=>setPage(page+1)} disabled={page===totalPage}>Next</button>
                        </div>
                    </div>
                </div>
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
export default PaginationComponent;

    
