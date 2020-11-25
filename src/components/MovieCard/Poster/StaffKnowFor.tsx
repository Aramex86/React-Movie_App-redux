import React from "react";
import { filterData,filterDepartament} from "../../Helper/filterData";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import {
  CombineCreditsCrewType,
  CombinedCreditsCastType,
} from "../../../Types/Types";
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
  const movies = [] as Array<CombinedCreditsCastType>;
  const tvShow = [] as Array<CombinedCreditsCastType>;
  const directing = [] as Array<CombineCreditsCrewType>
  const production = [] as Array<CombineCreditsCrewType>
  const directing1 = [] as Array<CombineCreditsCrewType>
  
  filterData(combineCast, movies, "movie");
  filterData(combineCrew, movies, "movie");
  filterData(combineCast, tvShow, "tv");
  filterData(combineCrew, tvShow, "tv");
  
  const media = [...combineCast,...combineCrew]
  const dataArr:any = media.map(item=> {
    return[item.id,item]
  })
  const mapArr:any = new Map(dataArr)
  const result = [...mapArr.values()]

  console.log(media);
  console.log(result);

   console.log(movies.map(i=> i.id));
  // console.log(tvShow);


  //  console.log(directing);
  // console.log(production);
  //  console.log(combineCrew.map(c => c.department ));
  //  console.log(combineCast.map(c => c ));
  //  console.log(combineCast);
  // console.log(combineCrew);
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
                {media.slice(0, 1).map((m) => (
                  <span key={m.credit_id}>{m.media_type} {movies.length}</span>
                ))}
              </a>
              <a href="#" className="menuWrapp__drop-link">
                {media.slice(0, 1).map((m) => (
                  <span key={m.credit_id}>{`${m.media_type} Show`} {tvShow.length}</span>
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
               {/*    {directing.slice(0,1).map(d => d.department)} {directing.length} */}
              </a>
              <a href="#" className="menuWrapp__drop-link">
               {/*  {production.slice(0,1).map(p=> p.department)} {production.length} */}
               
              </a>
             {/*  <a href="#" className="menuWrapp__drop-link">
                Directing
              </a> */}
            </div>
          </li>
        </ul>
      </div>
      <div className="carierwrapp__body">
        <TableContainer component={Paper}>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell style={{background:'#ff0a0a8a'}}>

               Movie
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {media.map((movie) => (
                <TableRow key={movie.credit_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={
                      movie.title ? { display: "block" } : { display: "none" }
                    }
                  >
                    {movie.title}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
               <TableCell style={{background:'#ff0a0a8a'}}>

               TV SHOW
               </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {media.map((movie) => (
                <TableRow key={movie.credit_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={
                      movie.name ? { display: "block" } : { display: "none" }
                    }
                  >
                    {movie.name}
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
