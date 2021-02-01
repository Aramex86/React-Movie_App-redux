import React from "react";
import { useSelector } from "react-redux";
import { errorSelector } from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";

const PageNotFound = () => {
const error = useSelector((state:AppStateType) => errorSelector(state));


const closeTab=()=>{
    window.close();
}

  return <div className="notfoundwrapper">
     <div className='notfoundwrapper_banner'>
         <h1>{error}</h1>
        <button className='btn btn--closeTab' onClick={closeTab}>close tab</button>
     </div>
  </div>;
};

export default PageNotFound;
