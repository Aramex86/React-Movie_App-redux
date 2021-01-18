import React, { FC } from "react";
import { CastType } from "../../Types/Types";

type PropsType = {
  cast: Array<CastType> | undefined;
};

const CollectionCard: FC<PropsType> = ({ cast }) => {
  console.log(cast);
  const primaryCast = cast?.slice(0, 15);

  console.log(primaryCast);

  return (
    <>
      {primaryCast?.map((item) => (
        <div className="cardwrap" key={item.id}>
          <div className="cardwrap__img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt=""
            />
          </div>
          <div className="cardwrap__info">
            <b>{item.name}</b><br/>
            {item.character}
          </div>
        </div>
      ))}
    </>
  );
};

export default CollectionCard;
//background: `linear-gradient(to left, #7f7f7f9e, black), url(https://image.tmdb.org/t/p/w500/${props.details?.poster_path}) no-repeat`,
