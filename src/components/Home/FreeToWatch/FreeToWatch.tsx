import React, { useState } from "react";
import FreeToWatchNav from "./FreetToWatchNav";
import Movies from "./Movies";
import Tv from "./Tv";

const FreeToWatch = () => {
  const [freeToWaTch, setFreeToWaTch] = useState("movies");

  const showValue = (value: string) => {
    setFreeToWaTch(value);
  };
  return (
    <div className="freetowatchwrapp">
      <div className="freetowatchwrapp__header">
        <div className="freetowatchwrapp__header__heading">
          <h2>Free To Watch</h2>
        </div>
        <FreeToWatchNav freeToWaTch={freeToWaTch} showValue={showValue} />
      </div>
      <div className="freetowatchwrapp__body">
        {freeToWaTch === "movies" ? <Movies /> : ""}
        {freeToWaTch === "Tv" ? <Tv /> : ""}
      </div>
    </div>
  );
};

export default FreeToWatch;
