import React from "react";

type StreamType = {
  showStreaming: boolean;
  setShowStreaming: boolean | boolean;
};

type PropsType = {
  stream: Array<any>;
  tv: Array<any>;
  rent: Array<any>;
  theater: Array<any>;
};

const HeroNav: React.FC<PropsType> = ({ stream, tv, theater, rent }) => {
  const [showStreaming, setShowStreaming] = stream;
  const [showOnTv, setShowOnTv] = tv;
  const [showInTheater, setShowInTheater] = theater;
  const [showForRent, setShowForRent] = rent;

 const showStream=()=>{
   setShowStreaming(true)
   setShowOnTv(false)
   setShowInTheater(false)
   setShowForRent(false)
 }
 const showTv=()=>{
   setShowStreaming(false)
   setShowOnTv(true)
   setShowInTheater(false)
   setShowForRent(false)
 }
 const showTheater=()=>{
   setShowStreaming(false)
   setShowOnTv(false)
   setShowInTheater(true)
   setShowForRent(false)
 }
 const showRent=()=>{
   setShowStreaming(false)
   setShowOnTv(false)
   setShowInTheater(false)
   setShowForRent(true)
 }
  

  console.log('steam',showStreaming);
  console.log('tv',showOnTv);
  console.log('theater',showInTheater);
  console.log('rent',showForRent);

  return (
    <ul className="herowrapnav">
      <li className="herowrapnav__item">
        <button
          onClick={() => setShowStreaming(showStream)}
          className={`btn btn--heronav ${
            showStreaming ? "btn--heroactive" : ""
          }`}
        >
          <span>streming</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => setShowOnTv(showTv)}
          className={`btn btn--heronav ${showOnTv ? "btn--heroactive" : ""}`}
        >
          <span>on tv</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => setShowForRent(showRent)}
          className={`btn btn--heronav ${showForRent ? "btn--heroactive" : ""}`}
        >
          <span>for ret</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => setShowInTheater(showTheater)}
          className={`btn btn--heronav ${
            showInTheater ? "btn--heroactive" : ""
          }`}
        >
          <span>in theaters</span>
        </button>
      </li>
    </ul>
  );
};

export default HeroNav;
