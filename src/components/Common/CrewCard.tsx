import React, { FC } from "react";
import noPhoto from "../../assets/noImage.png";
import noPhotoFem from "../../assets/noImageFem.png";

type ElemType = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
};

type PropsType = {
  gender: number;
  credit_id: string;
  id: number;
  name: string;
  profile_path: string | null;
  department: string;
  job: string;
  elem?: ElemType | any;
};

const CrewCard: FC<PropsType> = ({
  gender,
  credit_id,
  id,
  name,
  profile_path,
  department,
  elem,
  job,
}) => {
  return (
    <div className="crewwrapp">
      <div className="castwrap">
        <div className="castwrap__img">
          {profile_path === null ? (
            <img src={gender === 2 ? noPhoto : noPhotoFem} alt={name} />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
          )}
        </div>
        <div className="castwrap__info">
          <span className="castwrap__info-name">{name}</span>
          <span className="castwrap__info-character">{job}</span>
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
