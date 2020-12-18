import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMoviesQuerySelector,
  totalPagesSelector,
} from "../Store/Selectors/SearchSelector";
import { AppStateType } from "../Store/store";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
import { requestCurrentPage, requestSearchMovie } from "../Store/Reducers/SearchReducer";

const Paginator = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const totalPages = useSelector((state: AppStateType) =>
    totalPagesSelector(state)
  );
  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );

  
    dispatch(requestCurrentPage(page));
  

  const handleChange = (e: any, value: number) => {
    setPage(value);
  };

  console.log(totalPages);
  console.log(page);

  return (
    <div>
      <Pagination
        count={totalPages}
        size="large"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default Paginator;
