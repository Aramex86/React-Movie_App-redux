import React, { useState } from "react";
import HeroNav from "../Common/HeroNav";
import Streaming from "./Popular/Streaming";
import OnTv from "./Popular/OnTv";
import ForRent from "./Popular/ForRent";
import InTheater from "./Popular/InTheater";

const Popular = () => {
  const [showStreaming, setShowStreaming] = useState<boolean>(true);
  const [showOnTv, setShowOnTv] = useState(false);
  const [showInTheater, setShowInTheater] = useState(false);
  const [showForRent, setShowForRent] = useState(false);

  return (
    <div className="popularwrapp">
      <div className="popular__header">
        <div className="popular__header__heading">
          <h2>What's Popular</h2>
        </div>
        <HeroNav
          stream={[showStreaming, setShowStreaming]}
          tv={[showOnTv, setShowOnTv]}
          theater={[showInTheater, setShowInTheater]}
          rent={[showForRent, setShowForRent]}
        />
      </div>
      <div className="popular__body">
        {showStreaming ? <Streaming /> : ""}
        {showOnTv ? <OnTv /> : ""}
        {showForRent ? <ForRent /> : ""}
        {showInTheater ? <InTheater /> : ""}
      </div>
    </div>
  );
};

export default Popular;
