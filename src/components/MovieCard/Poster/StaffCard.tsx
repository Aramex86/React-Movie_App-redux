import React from "react";
import { CombinedCreditsType, DetailType } from "../../../Types/Types";
import StaffCardMovielist from "./StaffCardMovielist";

type PropsType = {
  cardDetails: DetailType | null;
  combine: Array<CombinedCreditsType>;
};

const StaffCard: React.FC<PropsType> = ({ cardDetails, combine }) => {
//   console.log(cardDetails);
//   console.log("MOVIES", combine);

  const howOld = () => {
    const date = new Date();
    const fullyear = date.getFullYear();
    const birth: any = cardDetails?.birthday.slice(0, 4);
    const years = fullyear - birth;
    return years;
  };

  return (
    <div className="staffpagewrapp">
      <div className="leftwrapp">
        <div className="leftwrapp__img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${cardDetails?.profile_path}`}
            alt=""
          />
        </div>
        <ul className="infolist">
          <li className="infolist__item">
            <div className="infolist__social">
              <a href="#">facebook</a>
              <a href="#">twitter</a>
              <a href="#">instagram</a>
            </div>
          </li>
          <li className="infolist__item">
            <h2>Personal Info</h2>
          </li>
          <li className="infolist__item">
            <h4>Known For</h4>
            <span>{cardDetails?.known_for_department}</span>
          </li>
          <li className="infolist__item">
            <h4>Known Credits</h4>
            <span>{combine.length}</span>
          </li>
          <li className="infolist__item">
            <h4>Gender</h4>
            <span>{cardDetails?.gender === 2 ? "Male" : "Female"}</span>
          </li>
          <li className="infolist__item">
            <h4>Birthday</h4>
            {cardDetails?.birthday === null ? (
              "---"
            ) : (
              <span>{`${cardDetails?.birthday} (${howOld()} years old)`}</span>
            )}
          </li>
          <li className="infolist__item">
            <h4>Place of Birth</h4>
            <span>{cardDetails?.place_of_birth}</span>
          </li>
          <li className="infolist__item">
            <h4>Also Known As</h4>
            {cardDetails?.also_known_as.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </li>
        </ul>
      </div>
      <div className="rigthwrapp">
        <h1 className="rigthwrapp__name">{cardDetails?.name}</h1>
        <h3 className="rigthwrapp__biography">Biography</h3>
        <p className="rigthwrapp__biography__text">{cardDetails?.biography}</p>

        <h3>Known For</h3>
        <div className="rigthwrapp__movielist">
          <StaffCardMovielist combine={combine} />
        </div>
      </div>
    </div>
  );
};

export default StaffCard;

//https://image.tmdb.org/t/p/w500/
