import React, { FC, useEffect, useState } from "react";
import { CollectionType } from "../../../Types/Types";
import NoPoster from "../../../assets/comingSoon.jpg";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestSearchCollections } from "../../Store/Reducers/SearchReducer";
import { searchMoviesQuerySelector } from "../../Store/Selectors/SearchSelector";
import { AppStateType } from "../../Store/store";
import Paginator from "../../Common/Paginator";
type PropsType = {
  collections: Array<CollectionType> | undefined;
  totalPages: number | undefined;
};
const Collections: FC<PropsType> = ({ collections, totalPages }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );
  useEffect(() => {
    dispatch(requestSearchCollections(searchQuery, page));
  }, [page,dispatch,searchQuery]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  return (
    <>
      {collections?.map((collection) => (
        <div className="searchresultitems" key={collection.id}>
          <div className="searchresultitems__img">
            {collection.poster_path === null ? (
              <img src={NoPoster} alt="pic" />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
                alt="pic"
              />
            )}
          </div>
          <div className="searchresultitems__desc">
            <h4>{collection.name}</h4>
            <p>{collection.overview.slice(0, 150)}</p>
          </div>
        </div>
      ))}
      <Paginator
        handalePageChange={handalePageChange}
        totalPages={totalPages}
      />
    </>
  );
};

export default Collections;
