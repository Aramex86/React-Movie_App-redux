import React, { FC } from "react";
import { CastType, CrewType } from "../../Types/Types";
import NoPhoto from "../../assets/noImage.png";

type PropsType = {
  cast?: Array<CastType> | undefined;
  crew?: Array<CrewType> | undefined;
};

const CollectionCard: FC<PropsType> = ({ cast, crew }) => {
  const primaryCast = cast?.slice(0, 15);
  const primaryCrew = crew?.slice(0, 20);

  const crewStaff: Array<CrewType> = [];
  const crewStaffFilter = function () {
    primaryCrew?.filter((item) => {
      if (item.job.includes("Director")) {
        crewStaff.push(item);
      } else if (item.department.includes("Writing")) {
        crewStaff.push(item);
      }
    });
  };
  crewStaffFilter();

  //  console.log(primaryCrew);

  return (
    <>
      {primaryCast?.map((item) => (
        <div className="cardwrap" key={item.id}>
          <div className="cardwrap__img">
            {item.profile_path === null ? (
              <img src={NoPhoto} alt="pic" />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt="pic"
              />
            )}
          </div>
          <div className="cardwrap__info">
            <b>{item.name}</b>
            <br />
            {item.character}
          </div>
        </div>
      ))}
      {crewStaff?.map((item) => (
        <div className="cardwrap" key={item.id}>
          <div className="cardwrap__img">
            {item.profile_path === null ? (
              <img src={NoPhoto} alt="pic" />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt="pic"
              />
            )}
          </div>
          <div className="cardwrap__info">
            <b>{item.name}</b>
            <br />
            {item.department}
          </div>
        </div>
      ))}
    </>
  );
};

export default CollectionCard;
//background: `linear-gradient(to left, #7f7f7f9e, black), url(https://image.tmdb.org/t/p/w500/${props.details?.poster_path}) no-repeat`,
