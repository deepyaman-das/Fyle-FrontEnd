import React,{useState} from "react";
import {Link } from "react-router-dom";

const HomeComponent = () => {
  const [userName, setInputName] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  return (
    <div>
        <center>
        <input
          type="text"
          onChange={(e) => handleNameChange(e)}

        />
        <Link to={`/user/${userName}`}>
          <button >Search</button>
        </Link>
        </center>
        
    </div>
  );
};

export default HomeComponent;
