import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import FormControl from "@material-ui/core/FormControl";
import Select from "react-select";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { requestSort } from "../Store/Reducers/MovieListReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "90%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      fontSize: "1.3rem",
      // padding:'.5rem'
    },
  })
);

type OptionType = {
  value: string;
  label: string;
};

const Sort = () => {
  const classes = useStyles();
  const [state, setState] = useState<OptionType | undefined | null>(null);
  const [openSort, setOpenSort] = useState(true);
  const dispatch = useDispatch();

  const showSort = () => {
    setOpenSort(!openSort);
  };

  dispatch(requestSort(state?.value === undefined ? "" : state.value));

  console.log(state?.value);
  // console.log(openSort)

  const options = [
    { value: "popularity.asc", label: "Popularity Descending" },
    { value: "popularity.desc", label: "Popularity Ascending" },
    { value: "vote_avarage.desc", label: "Rating Descending" },
    { value: "vote_avarage.asc", label: "Rating Ascending" },
    { value: "release_date.desc", label: "Release Date Descending" },
    { value: "release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
    { value: "original_title.desc", label: "Title (Z-A)" },
  ];

  return (
    <div className="sort">
      <div className="sort__heading" onClick={showSort}>
        <h3>Sort</h3>
        {openSort ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {openSort ? (
        <div className="sort__body">
          <span>Sort Results By</span>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              options={options}
              onChange={setState}
              defaultValue={state}
            />
          </FormControl>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;
