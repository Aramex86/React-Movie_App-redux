import React, { useState } from "react";
import FreeToWatchNav from "./FreeToWatch/FreetToWatchNav";
import Movies from "./FreeToWatch/Movies";
import Tv from "./FreeToWatch/Tv";

const FreeToWatch = () => {
  const [freeToWaTch, setFreeToWaTch] = useState("movies");

  const showValue = (value: string) => {
    setFreeToWaTch(value);
  };
  return (
    <div className="freetowatchwrapp">
      <div className="freetowatchwrapp__header">
        <div className="freetowatchwrapp__header__heading">
          <h2>What's Popular</h2>
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
