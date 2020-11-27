import React, { useState } from "react";
import { filterData, filterDepartament } from "../../Helper/filterData";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import {
  CombineCreditsCrewType,
  CombinedCreditsCastType,
} from "../../../Types/Types";
import MovieInfoToolTip from "../../Common/movieInfoToolTip";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


type PropsTypes = {
  combineCrew: Array<CombineCreditsCrewType>;
  combineCast: Array<CombinedCreditsCastType>;
};

const StaffKnowFor: React.FC<PropsTypes> = ({ combineCrew, combineCast }) => {
  const [showTip, setShowTip] = useState("0");
  const moviesCrew = [] as Array<CombinedCreditsCastType>;
  const tvShow = [] as Array<CombinedCreditsCastType>;
  const directing = [] as Array<CombineCreditsCrewType>;
  const production = [] as Array<CombineCreditsCrewType>;
  const writing = [] as Array<CombineCreditsCrewType>;
  const acting = [] as Array<CombinedCreditsCastType>;

  filterData(combineCast, acting, "movie");
  filterData(combineCrew, moviesCrew, "movie");
  filterData(combineCast, tvShow, "tv");
  filterData(combineCrew, tvShow, "tv");

  filterDepartament(combineCrew, directing, "Directing");
  filterDepartament(combineCrew, production, "Production");
  filterDepartament(combineCrew, writing, "Writing");

  const showToolTip = (id: string) => {
    setShowTip(id);
  };

  const hideToolTip = (id: string) => {
    setShowTip((id = ""));
  };

  console.log("D", directing);
  console.log("P", production);
  console.log("A", acting);
  console.log("W", writing);


  return (
    <div className="carierwrapp">
      <div className="carierwrapp__header">
        <ul className="menuWrapp__list menuWrapp__list--carier">
          <li className="menuWrapp__item menuWrapp__item--carier">
            <span>
              All <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              <a href="#" className="menuWrapp__drop-link">
                {directing.slice(0, 1).map((m) => (
                  <span key={m.credit_id}>
                    {m.media_type} {combineCrew.length}
                  </span>
                ))}
              </a>
              <a href="#" className="menuWrapp__drop-link">
                {tvShow.slice(0, 1).map((m) => (
                  <span key={m.credit_id}>
                    {`${m.media_type} Show`} {tvShow.length}
                  </span>
                ))}
              </a>
            </div>
          </li>
          <li className="menuWrapp__item menuWrapp__item--carier">
            <span>
              Departament <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              <a href="#" className="menuWrapp__drop-link">
                {directing.slice(0, 1).map((d) => d.department)}{" "}
                {directing.length}
              </a>
              <a href="#" className="menuWrapp__drop-link">
                {production.slice(0, 1).map((p) => p.department)}{" "}
                {production.length}
              </a>
              <a href="#" className="menuWrapp__drop-link">
                {writing.length===0?'Writing':writing.slice(0, 1).map((p) =>p.department)} {writing.length}
              </a>
              <a href="#" className="menuWrapp__drop-link">
                {acting
                  .slice(0, 1)
                  .map((p) => (p.character === "Himself" ? "Acting" : ""))}{" "}
                {acting.length === 0 ? "" : acting.length}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="carierwrapp__body">
        <TableContainer component={Paper}>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tableheadcell">
                  <h3>Writing</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {writing.map((movie) => (
                <TableRow key={movie.credit_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={
                      movie.title ? { display: "block" } : { display: "none" }
                    }
                  >
                    <div className="movieinfo">
                      <span
                        className={
                          movie.release_date === undefined
                            ? "movieinfo__releasedate"
                            : movie.release_date === ""
                            ? "movieinfo__releasedate"
                            : ""
                        }
                      >
                        {movie.release_date === undefined
                          ? "---"
                          : movie.release_date === ""
                          ? "---"
                          : movie.release_date.slice(0, 4)}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title}
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        poster1={movie.backdrop_path}
                        desc={movie.overview}
                        title={movie.title}
                        showTip={showTip}
                        id={movie.credit_id}
                        hideTooltip={() => hideToolTip(movie.credit_id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tableheadcell">
                  <h3>Directing</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directing.map((movie) => (
                <TableRow key={movie.credit_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={
                      movie.title ? { display: "block" } : { display: "none" }
                    }
                  >
                    <div className="movieinfo">
                      <span
                        className={
                          movie.release_date === undefined
                            ? "movieinfo__releasedate"
                            : movie.release_date === ""
                            ? "movieinfo__releasedate"
                            : ""
                        }
                      >
                        {movie.release_date === undefined
                          ? "---"
                          : movie.release_date === ""
                          ? "---"
                          : movie.release_date.slice(0, 4)}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title}
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        poster1={movie.backdrop_path}
                        desc={movie.overview}
                        title={movie.title}
                        showTip={showTip}
                        id={movie.credit_id}
                        hideTooltip={() => hideToolTip(movie.credit_id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tableheadcell">
                  <h3>Production</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {production.map((movie) => (
                <TableRow key={movie.credit_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={
                      movie.title ? { display: "block" } : { display: "none" }
                    }
                  >
                    <div className="movieinfo">
                      <span
                        className={
                          movie.release_date === undefined
                            ? "movieinfo__releasedate"
                            : movie.release_date === ""
                            ? "movieinfo__releasedate"
                            : ""
                        }
                      >
                        {movie.release_date === undefined
                          ? "---"
                          : movie.release_date === ""
                          ? "---"
                          : movie.release_date.slice(0, 4)}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title}
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        poster1={movie.backdrop_path}
                        desc={movie.overview}
                        title={movie.title}
                        showTip={showTip}
                        id={movie.credit_id}
                        hideTooltip={() => hideToolTip(movie.credit_id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tableheadcell">
                  <h3>Acting</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {acting.map((movie) => (
                <TableRow key={movie.credit_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={
                      movie.title ? { display: "block" } : { display: "none" }
                    }
                  >
                    <div className="movieinfo">
                      <span
                        className={
                          movie.release_date === undefined
                            ? "movieinfo__releasedate"
                            : movie.release_date === ""
                            ? "movieinfo__releasedate"
                            : ""
                        }
                      >
                        {movie.release_date === undefined
                          ? "---"
                          : movie.release_date === ""
                          ? "---"
                          : movie.release_date.slice(0, 4)}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title}
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        poster1={movie.backdrop_path}
                        desc={movie.overview}
                        title={movie.title}
                        showTip={showTip}
                        id={movie.credit_id}
                        hideTooltip={() => hideToolTip(movie.credit_id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default StaffKnowFor;
