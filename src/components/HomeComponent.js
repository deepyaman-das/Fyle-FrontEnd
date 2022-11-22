import React,{useState} from "react";
import {Link,useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  const [userName, setInputName] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handleSubmit = (e) => {
    if(e.key==='Enter'){
      return navigate(`${userName}`)
    }
  };
  return (
    <div>
        <center>
        <input
          type="text"
          onChange={(e) => handleNameChange(e)}
          onKeyDown={(e) => handleSubmit(e)}
        />
        <Link to={`${userName}`}>
          <button >Search</button>
        </Link>
        </center>
    </div>
  );
};

export default HomeComponent;
