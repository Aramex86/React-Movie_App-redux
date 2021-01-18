import React, { FC, useEffect, useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { MdClose } from "react-icons/md";
import {
  requestSearchCollections,
  requestSearchMovie,
  requestSearchPeople,
  requestSearchQuery,
  requestSearchTv,
} from "../Store/Reducers/SearchReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppStateType } from "../Store/store";
import { traidingsSelector } from "../Store/Selectors/HomePageSelector";

type PropsType = {
  showSearch: boolean;
  hideSearchTab: () => void;
};

const SearchSlide: FC<PropsType> = ({ showSearch, hideSearchTab }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [query, setQuery] = useState<string>("");
  const trandings = useSelector((state: AppStateType) =>
    traidingsSelector(state)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(requestSearchQuery(e.target.value));
  };

  const keyhandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      history.push("/sreachresults");
      dispatch(requestSearchQuery(query));
      dispatch(requestSearchMovie(query, 1));
      dispatch(requestSearchTv(query, 1));
      dispatch(requestSearchPeople(query, 1));
      dispatch(requestSearchCollections(query, 1));
      hideSearchTab();
    }
  };

  useEffect(() => {
    if (window.matchMedia("(max-width:600px)").matches) {
      dispatch(requestSearchQuery(query));
      dispatch(requestSearchMovie(query, 1));
      dispatch(requestSearchTv(query, 1));
      dispatch(requestSearchPeople(query, 1));
      dispatch(requestSearchCollections(query, 1));
    }
  }, [query]);

  const cleanhandale = () => {
    setQuery("");
  };

  const slideSearch = ` ${
    showSearch ? "search__panell-wrapp--slide" : "search__panell-wrapp"
  }`;

  const trandCut = trandings.slice(0, 9);

  console.log(query);

  return (
    <div className={slideSearch}>
      <div className="search__panell">
        <SearchOutlinedIcon
          className="search__panell-searchicon"
          style={{ width: "1.3em", height: "1.5em" }}
        />{" "}
        <input
          type="text"
          placeholder="Search for a movie, tv show, person......"
          className="search__panell-input"
          value={query}
          onChange={handleSearch}
          onKeyPress={keyhandle}
        />{" "}
        <MdClose
          className="search__panell-closeicon"
          style={{ width: "1.3em", height: "1.3em" }}
          onClick={cleanhandale}
        />
      </div>
      <ul className="search__panell-list">
        {trandCut.map((res) => (
          <li
            className="search__panell-list-item"
            key={res.id}
            onClick={() => setQuery(res.title ? res.title : res.name)}
          >
            <SearchOutlinedIcon
              className="search__panell-searchicon--result"
              style={{ width: "1.3em", height: "1.5em" }}
            />{" "}
            {res.title ? res.title : res.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSlide;
