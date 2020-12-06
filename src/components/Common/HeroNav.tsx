import React from "react";

type StreamType = {
  showStreaming: boolean;
  setShowStreaming: boolean | boolean;
};

type PropsType = {
 show:string
  showValue:(value:string)=>void;
};

const HeroNav: React.FC<PropsType> = ({show,showValue }) => {

  return (
    <ul className="herowrapnav">
      <li className="herowrapnav__item">
        <button
          onClick={()=>showValue('stream')}
          className={`btn btn--heronav ${
            show === 'stream' ? "btn--heroactive" : ""
          }`}
        >
          <span>streming</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => showValue('onTv')}
          className={`btn btn--heronav ${show === 'onTv' ? "btn--heroactive" : ""}`}
        >
          <span>on tv</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => showValue('rent')}
          className={`btn btn--heronav ${show ==='rent' ? "btn--heroactive" : ""}`}
        >
          <span>for ret</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => showValue('theater')}
          className={`btn btn--heronav ${
            show==='theater' ? "btn--heroactive" : ""
          }`}
        >
          <span>in theaters</span>
        </button>
      </li>
    </ul>
  );
};

export default HeroNav;
