import React from "react";
import SocialComp from "../components/Common/SocialComp";
import { ExternalIdsType, KeywordsType, TvDetailType } from "../Types/Types";

type PropType = {
  details: TvDetailType | null;
  keywords: Array<KeywordsType>;
  social: ExternalIdsType | null
};

const CardInfo = ({ details, keywords,social }: PropType) => {
  return (
    <div className="cardInfoWrapp">
      <ul className="cardInfoList">
      <li className="cardInfoList__item">
          <SocialComp social={social}/>
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Status</span>
          <br />
          <span className="cardInfoList__item__info">{details?.status}</span>
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Original Language</span>
          <br />
          <span className="cardInfoList__item__info">
            {details?.spoken_languages.map((l) => l.name)}
          </span>
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Networks</span>
          <br />
          {details?.networks.map((item) => (
            <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}  key={item.id}/>
          ))}
        </li>
        <li className="cardInfoList__item">
          <span className="cardInfoList__item__header">Type</span>
            
          <br />
          <span className="cardInfoList__item__info">{details?.type}</span>
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
