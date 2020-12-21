import React from "react";
import { FaChevronRight } from "react-icons/fa";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const Filters = () => {
  const [state, setState] = React.useState<{
    value:string;
  }>({
  
   value:''
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  console.log(state)
  return (
    <div className="filter">
      <div className="filter__sort">
        <div className="filter__heading">
          <h2>Sort </h2>
          <FaChevronRight />
        </div>
        <div className="filter__body">
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
          <FormControl variant="outlined">
            <Select
              native
              value={state.value}
              onChange={handleChange}
              inputProps={{
                name: "value",
                id: "outlined-age-native-simple",
              }}
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
        </div>
      </div>
      <div>filter</div>
    </div>
  );
};

export default Filters;
