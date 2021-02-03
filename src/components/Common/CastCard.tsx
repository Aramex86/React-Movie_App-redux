import React, { FC } from "react";
import noPhoto from "../../assets/noImage.png";
import noPhotoFem from "../../assets/noImageFem.png";

type PropsType = {
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
};

const CastCard: FC<PropsType> = ({ name, profile_path, character, gender }) => {
  return (
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
        <span className="castwrap__info-character">{character}</span>
      </div>
    </div>
  );
};

export default CastCard;
