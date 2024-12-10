import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Form = ({dataFetch}) => {

  const [userCity, setUserCity] = useState("");

  const formSubmit = (userCity)=> {
    if(userCity === ""){
      alert("Please enter city.")
    }else{
      dataFetch(userCity);
      setUserCity("");
    }
  }
  

  return (
    <div className="d-flex w-full justify-content-center my-5">
      <div className="input-group w-50">
        <input type="text" value={userCity} className="form-control" onChange={(e)=> setUserCity(e.target.value)} placeholder="Search city" />
        <div className="input-group-append">
          <button className="btn btn-success" type="button" onClick={()=>formSubmit(userCity)}>
          <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
