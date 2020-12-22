import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { BiCalendarEvent } from "react-icons/bi";
import { AppStateType } from "../Store/store";
import { useDispatch, useSelector } from "react-redux";
import { genresSelector } from "../Store/Selectors/MovieSelector";
import { requestGenres } from "../Store/Reducers/MovieListReducer";

const Filter = () => {
  const [openSort, setOpenSort] = useState(false);
  const [selectedDate, setSelectedDate] = useState<undefined | any>(undefined);
  const [keyword, setKeyword] = useState<string>("");

  const moviegenres = useSelector((state: AppStateType) =>
    genresSelector(state)
  );
  const dispach = useDispatch();

  useEffect(() => {
    dispach(requestGenres());
  }, []);

  const showSort = () => {
    setOpenSort(!openSort);
  };

  const handleDayChange = (day: any) => {
    setSelectedDate(day);
  };

  const handaleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const date = new Date(selectedDate);

  console.log(openSort);
  console.log(date.toLocaleDateString());
  console.log(moviegenres);
  console.log(keyword);

  return (
    <div className="filter">
      <div className="filter__heading" onClick={showSort}>
        <h3>Filter</h3>
        {openSort ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {openSort ? (
        <div className="filter__body">
          <div className="filter__body__date">
            <span className="heading">Release Dates</span>
            <div className="from">
              <span>from</span>
              <DayPickerInput onDayChange={handleDayChange} />
              <span className="icon">
                <BiCalendarEvent />
              </span>
            </div>
            <div className="to">
              <span>to</span>
              <DayPickerInput
                value={"1/12/2021"}
                onDayChange={handleDayChange}
              />
              <span className="icon">
                <BiCalendarEvent />
              </span>
            </div>
          </div>

          <div className="filter__body__genres">
            <span className="heading">Genres</span>
            <div>
              {moviegenres.map((movie) => (
                <span>{movie.name}</span>
              ))}
            </div>
          </div>
          <div className="filter__body__keywords">
            <span className="heading">Keywords</span>
            <div>

            <input
              type="text"
              placeholder="Filter by keywords..."
              onChange={handaleKeyword}
              />
              </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
