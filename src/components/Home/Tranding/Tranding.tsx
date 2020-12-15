import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Today from "./Today";
import Week from "./Week";
import TraidingNav from "./TraidingNav";

const Tranding = () => {
  const [traiding, setTraiding] = useState("today");
  const showValue = (value: string) => {
    setTraiding(value);
  };
  return (
    <div className="traidingwrapp">
      <div className="traidingwrapp__header">
        <div className="traidingwrapp__header__heading">
          <h2>Trending</h2>
        </div>
        <TraidingNav traiding={traiding} showValue={showValue} />
      </div>
      <div className="freetowatchwrapp__body">
        {traiding === "today" ? <Today /> : ""}
        {traiding === "this week" ? <Week /> : ""}
      </div>
    </div>
  );
};

export default Tranding;
