import React from "react";
import { MovieDetailsType } from "../../Types/Types";

type PropType={
  details: MovieDetailsType | null;
}





const CardInfo = ({details}:PropType) => {
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
          <span className="cardInfoList__item__info">{details?.spoken_languages.map(l=>l.name)}</span>
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
                  <li className="keywordsWrapp__item">
                      <a href="#" className="keywordswrapp__link">clown</a></li>
                  <li className="keywordsWrapp__item">
                      <a href="#" className="keywordswrapp__link">some keyword</a></li>
                  <li className="keywordsWrapp__item">
                      <a href="#" className="keywordswrapp__link">keyword</a></li>
                  <li className="keywordsWrapp__item">
                      <a href="#" className="keywordswrapp__link">killer</a></li>
                  <li className="keywordsWrapp__item">
                      <a href="#" className="keywordswrapp__link">star</a></li>
              </ul>
          </div>
    </div>
  );
};

export default CardInfo;
