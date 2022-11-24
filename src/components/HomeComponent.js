import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  const [userName, setInputName] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      return navigate(`${userName}`);
    }
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <p className="text-primary h3 mb-4">
        <b>Enter the Github username</b>
      </p>
      <div class="card rounded-5">
        <div class="card-body">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Enter Github Username"
              onChange={(e) => handleNameChange(e)}
              onKeyDown={(e) => handleSubmit(e)}
            />
            <Link to={`${userName}`}>
              <button className="btn btn-primary rounded-5">
                <i class="fas fa-search"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
