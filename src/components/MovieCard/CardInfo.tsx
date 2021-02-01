import React from "react";
import { KeywordsType, MovieDetailsType } from "../../Types/Types";

type PropType = {
  details: MovieDetailsType | null;
  keywords: Array<KeywordsType>;
};

const CardInfo = ({ details, keywords }: PropType) => {
  return (
    <div className="cardInfoWrapp">
      <ul className="cardInfoList">
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Status</span>
          <br />
          <span className="cardInfoList__item__info">{details?.status}</span>
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Original Language</span>
          <br />
          <span className="cardInfoList__item__info">
            {details == undefined?'':details?.spoken_languages.map((l) => l.name)}
          </span>
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Budget</span>
          <br />
          <span className="cardInfoList__item__info">{`$${details?.budget}`}</span>
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Revenue</span>
          <br />
          <span className="cardInfoList__item__info">{`$${details?.revenue}`}</span>
        </li>
      </ul>
      <div className="keywordsWrapp">
        <h4>Keywords</h4>
        <ul className="keywordsWrapp__list">
          {keywords.map((k) => (
            <li className="keywordsWrapp__item" key={k.id}>
              <a href="#" className="keywordsWrapp__link">
                {k.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardInfo;
