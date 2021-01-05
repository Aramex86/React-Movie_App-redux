import React, { FC, useEffect, useState } from "react";
import { SearchType } from "../../../Types/Types";
// import { Link } from "react-router-dom";
import NoPerson from "../../Common/NoPesrson";
import { useDispatch, useSelector } from "react-redux";
import { requestSearchPeople } from "../../Store/Reducers/SearchReducer";
import { searchMoviesQuerySelector } from "../../Store/Selectors/SearchSelector";
import { AppStateType } from "../../Store/store";
import Paginator from "../../Common/Paginator";
type PropsType = {
  persons: Array<SearchType> | undefined;
  totalPages: number | undefined;
};

const Person: FC<PropsType> = ({ persons, totalPages }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );

  useEffect(() => {
    dispatch(requestSearchPeople(searchQuery, page));
  }, [page,searchQuery,dispatch]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  return (
    <>
      {persons?.map((person) => (
        <div
          className="searchresultitems searchresultitems--person"
          key={person.id}
        >
          <div className="searchresultitems__img">
            {person.profile_path === null ? (
              <NoPerson />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt="pic"
              />
            )}
          </div>
          <div className="searchresultitems__desc">
            <h4>{person.name}</h4>
            <span>{person.known_for_department}</span>
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

export default Person;
