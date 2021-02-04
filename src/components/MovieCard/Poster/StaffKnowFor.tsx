import React, { useState } from "react";
import { filterData, filterDepartament } from "../../Helper/filterData";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import {
  AllMediaType,
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
  const [selectWriting, setSelectWriting] = useState(false);
  const [selectProd, setSelectProd] = useState(false);
  const [selectActing, setSelectActing] = useState(false);
  const [selectDirecting, setSelectDirecting] = useState(false);
  const [clearAll, setClearAll] = useState(false);
  const [movies, setMovies] = useState<any>([]);
  const [tv, setTv] = useState<any>([]);
  const [showMovieTv, setShowMovieTv] = useState(false);
  const [showDep,setShowDep]=useState(true);
  const [showMovTv,setShowMovTv]=useState(false);

  const moviesCrew = [] as Array<AllMediaType>;
  const tvShow = [] as Array<AllMediaType>;
  const directing = [] as Array<AllMediaType>;
  const production = [] as Array<AllMediaType>;
  const writing = [] as Array<AllMediaType>;
  const acting = [] as Array<AllMediaType>;

  filterData(combineCast, acting, "movie");
  filterData(combineCrew, moviesCrew, "movie");
  filterData(combineCast, tvShow, "tv");
  filterData(combineCrew, tvShow, "tv");

  filterDepartament(combineCrew, directing, "Directing");
  filterDepartament(combineCrew, production, "Production");
  filterDepartament(combineCrew, writing, "Writing");

  const allMedia = [
    ...writing,
    ...directing,
    ...production,
    ...acting,
  ] as Array<AllMediaType>;

  const nrOfMovies = allMedia.filter(
    (item: any) => item.media_type === "movie"
  );
  const nrOfTv = allMedia.filter((item: any) => item.media_type === "tv");

  const showToolTip = (id: string) => {
    setShowTip(id);
  };

  const hideToolTip = (id: string) => {
    setShowTip((id = ""));
  };

  const showWriting = (e: any) => {
    e.preventDefault();
    setSelectWriting(false);
    setSelectProd(true);
    setSelectActing(true);
    setSelectDirecting(true);
    setClearAll(true);
    setShowDep(true);
  };
  const showProd = (e: any) => {
    e.preventDefault();
    setSelectWriting(true);
    setSelectProd(false);
    setSelectActing(true);
    setSelectDirecting(true);
    setClearAll(true);
    setShowDep(true);
  };
  const showActing = (e: any) => {
    e.preventDefault();
    setSelectWriting(true);
    setSelectProd(true);
    setSelectActing(false);
    setSelectDirecting(true);
    setClearAll(true);
    setShowDep(true);
  };
  const showDirecting = (e: any) => {
    e.preventDefault();
    setSelectWriting(true);
    setSelectProd(true);
    setSelectActing(true);
    setSelectDirecting(false);
    setClearAll(true);
    setShowDep(true);
  };

  const clearAllFilter = () => {
    setSelectWriting(false);
    setSelectProd(false);
    setSelectActing(false);
    setSelectDirecting(false);
    setClearAll(false);
    setShowDep(true);
    setShowMovTv(false)
  };

  const showMovies = (e: any) => {
    e.preventDefault();
    setShowMovieTv(true);
    setShowDep(false);
    setShowMovTv(true);
    setClearAll(true);
    setMovies(
      allMedia.filter((movie: any) => {
        if (movie.media_type === "movie") {
          return movie;
        }
      })
    );
  };

  const showTvShows = (e: any) => {
    e.preventDefault();
    setShowMovieTv(false);
    setShowDep(false);
    setShowMovTv(true);
    setClearAll(true);
    setTv(
      allMedia.filter((tv: any) => {
        if (tv.media_type === "tv") {
          return tv;
        }
      })
    );
  };
  //  console.log("D", directing);
  // console.log("P", production);
  //  console.log("A", acting);
  //  console.log("W", writing);
  return (
    <div className="carierwrapp">
      <div className="carierwrapp__header">
        <ul className="menuWrapp__list menuWrapp__list--carier">
          <li className="menuWrapp__item menuWrapp__item--carier">
            {clearAll ? (
              <button className="btn btn--clearall" onClick={clearAllFilter}>
                Clear
              </button>
            ) : (
              ""
            )}
          </li>
          <li className="menuWrapp__item menuWrapp__item--carier">
            <span>
              All <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              <a href="#" className="menuWrapp__drop-link" onClick={showMovies}>
                {allMedia.slice(0, 1).map((m: any) => (
                  <span key={m.credit_id}>
                    {m.media_type === "movie" ? "Movies" : "Movies"}{" "}
                    {nrOfMovies.length}
                  </span>
                ))}
              </a>
              <a
                href="#"
                className="menuWrapp__drop-link"
                onClick={showTvShows}
              >
                {tvShow.slice(0, 1).map((m) => (
                  <span key={m.credit_id}>
                    {`${m.media_type} Shows`} {nrOfTv.length}
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
              <a
                href="#"
                className="menuWrapp__drop-link"
                onClick={showDirecting}
              >
                {directing.length === 0
                  ? "Directing"
                  : directing.slice(0, 1).map((d) => d.department)}{" "}
                {directing.length}
              </a>
              <a href="#" className="menuWrapp__drop-link" onClick={showProd}>
              {production.length === 0
                  ? "Production"
                  : production.slice(0, 1).map((p) => p.department)}{" "}
                {production.length}
              </a>
              <a
                href="#"
                className="menuWrapp__drop-link"
                onClick={showWriting}
              >
                {writing.length === 0
                  ? "Writing"
                  : writing.slice(0, 1).map((p) => p.department)}{" "}
                {writing.length}
              </a>
              <a href="#" className="menuWrapp__drop-link" onClick={showActing}>
                {acting
                  .slice(0, 1)
                  .map((p) =>
                    p.character === "Himself" ? "Acting" : "Acting"
                  )}{" "}
                {acting.length === 0 ? "" : acting.length}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="carierwrapp__body">
       <div style={showMovTv?{display:'table',width:'100%'}:{display:'none'}}>
        {showMovieTv ? (
          <TableContainer component={Paper}>
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Directing</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies
                  .filter((item: any) => item.department === "Directing")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Writing</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies
                  .filter((item: any) => item.department === "Writing")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Production</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies
                  .filter((item: any) => item.department === "Production")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Acting</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies
                  .filter((item: any) => item.department === "Production")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
        ) : (
          <TableContainer component={Paper}>
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Directing</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tv
                  .filter((item: any) => item.department === "Directing")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{movie.episode_count>1?`(${movie.episode_count} episodes)`:`(${movie.episode_count} episode)`}{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Writing</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tv
                  .filter((item: any) => item.department === "Writing")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{movie.episode_count>1?`(${movie.episode_count} episodes)`:`(${movie.episode_count} episode)`}{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
            <Table
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Production</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tv
                  .filter((item: any) => item.department === "Production")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                            <span className="movieinfo__job">{movie.episode_count>1?`(${movie.episode_count} episodes)`:`(${movie.episode_count} episode)`}{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
            <Table
              size="medium"
              aria-label="a dense table"
              style={selectWriting ? { display: "none" } : { display: "table" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableheadcell">
                    <h3>Acting</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tv
                  .filter((item: any) => item.department === "Production")
                  .map((movie: any) => (
                    <TableRow key={movie.credit_id}>
                      <TableCell component="th" scope="row">
                        <div className="movieinfo">
                          <span>
                            {movie.release_date === undefined
                              ? ""
                              : movie.release_date.slice(0, 4)}
                            {movie.first_air_date
                              ? movie.first_air_date.slice(0, 4)
                              : ""}
                          </span>{" "}
                          <span
                            className="movieinfo__dot"
                            onClick={() => showToolTip(movie.credit_id)}
                            id={`${movie.id}`}
                          ></span>{" "}
                          {movie.title ? movie.title : movie.name}
                          <span className="movieinfo__job">{movie.episode_count>1?`(${movie.episode_count} episodes)`:`(${movie.episode_count} episode)`}{`... as ${movie.job}`}</span>
                          <MovieInfoToolTip
                            poster={movie.poster_path}
                            desc={movie.overview}
                            title={movie.title}
                            name={movie.name}
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
        )}
        </div>
        {showDep?
        <TableContainer component={Paper}>
         <Table
            size="medium"
            aria-label="a dense table"
            style={selectWriting ? { display: "none" } : { display: "table" }}
          >
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
                  <TableCell component="th" scope="row">
                    <div className="movieinfo">
                      <span>
                        {movie.release_date === undefined
                          ? ""
                          : movie.release_date.slice(0, 4)}
                        {movie.first_air_date
                          ? movie.first_air_date.slice(0, 4)
                          : ""}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title ? movie.title : movie.name}
                      <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        desc={movie.overview}
                        title={movie.title}
                        name={movie.name}
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
          <Table
            size="medium"
            aria-label="a dense table"
            style={selectDirecting ? { display: "none" } : { display: "table" }}
          >
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
                  <TableCell component="th" scope="row">
                    <div className="movieinfo">
                      <span>
                        {movie.release_date === undefined
                          ? ""
                          : movie.release_date.slice(0, 4)}
                        {movie.first_air_date
                          ? movie.first_air_date.slice(0, 4)
                          : ""}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title ? movie.title : movie.name}
                      <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        desc={movie.overview}
                        title={movie.title}
                        name={movie.name}
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
          <Table
            size="medium"
            aria-label="a dense table"
            style={selectProd ? { display: "none" } : { display: "table" }}
          >
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
                  <TableCell component="th" scope="row">
                    <div className="movieinfo">
                      <span>
                        {movie.release_date === undefined
                          ? movie.release_date
                          : "---"
                          ? movie.release_date.slice(0, 4)
                          : ""}
                        {movie.first_air_date
                          ? movie.first_air_date.slice(0, 4)
                          : ""}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title ? movie.title : movie.name}
                      <span className="movieinfo__job">{`... as ${movie.job}`}</span>
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        desc={movie.overview}
                        title={movie.title}
                        name={movie.name}
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
          <Table
            size="medium"
            aria-label="a dense table"
            style={selectActing ? { display: "none" } : { display: "table" }}
          >{}
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
                  <TableCell component="th" scope="row">
                    <div className="movieinfo">
                      <span>
                        {movie.release_date === undefined
                          ? "---"
                          : movie.release_date.slice(0, 4)}
                        {movie.first_air_date
                          ? movie.first_air_date.slice(0, 4)
                          : ""}
                      </span>{" "}
                      <span
                        className="movieinfo__dot"
                        onClick={() => showToolTip(movie.credit_id)}
                        id={`${movie.id}`}
                      ></span>{" "}
                      {movie.title ? movie.title : movie.name}
                      <span className="movieinfo__job">{`... as ${
                        movie.character ? movie.character : "Unknown"
                      }`}</span>
                      <MovieInfoToolTip
                        poster={movie.poster_path}
                        desc={movie.overview}
                        title={movie.title}
                        name={movie.name}
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
        </TableContainer>:''}
      </div>
    </div>
  );
};

export default StaffKnowFor;
