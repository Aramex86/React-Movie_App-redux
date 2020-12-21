import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles, Theme, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '90%',
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      
    },
    select:{
      fontSize:'1.3rem',
     // padding:'.5rem'
    }
  }),
);


const Filter = () => {

  const classes = useStyles();
  const [state, setState] = useState('');
  const [openSort,setOpenSort]=useState(false)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string);
  };

  const showSort=()=>{
    setOpenSort(!openSort)
  }

  console.log(state)
  console.log(openSort)

  return (
    <div className="filter">
      <div className="filter__sort">
        <div className="filter__heading" onClick={showSort}>
          <h3>Filter</h3>
          {openSort?<FaChevronDown />:<FaChevronRight />}
          
        </div>
        {openSort?<div className="filter__body">
          <span>Sort Results By</span>
          {/* <select>
            <option>Popularity Descending</option>
            <option>Popularity Ascending</option>
            <option>Rating Descending</option>
            <option>Rating Ascending</option>
            <option>Release Date Descending</option>
            <option>Release Date Ascending</option>
            <option>Title (A-Z)</option>
            <option>Title (Z-A)</option>
          </select> */}
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              native
              value={state}
              onChange={handleChange}
              autoWidth={true}
              className={classes.select}
            >
            <option>Popularity Descending</option>
            <option>Popularity Ascending</option>
            <option>Rating Descending</option>
            <option>Rating Ascending</option>
            <option>Release Date Descending</option>
            <option>Release Date Ascending</option>
            <option>Title (A-Z)</option>
            <option>Title (Z-A)</option>
            </Select>
          </FormControl>
        </div>:''}
      </div>
    </div>
  );
};

export default Filter;
