import React from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { CombineCreditsCrewType, CombinedCreditsCastType } from "../../../Types/Types";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


type PropsTypes={
    combineCrew: Array<CombineCreditsCrewType>
    combineCast:Array<CombinedCreditsCastType>
}




const StaffKnowFor:React.FC<PropsTypes>= ({combineCrew,combineCast}) => {
    const classes = useStyles();


    // console.log(combineCrew.filter(c => c.title ==="The Chef Show"));
    // console.log(combineCast.filter(c => c.title ==="The Chef Show"));
    console.log(combineCast);
    console.log(combineCrew);
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
                Movies
              </a>
              <a href="#" className="menuWrapp__drop-link">
                TV Shows
              </a>
            </div>
          </li>
          <li className="menuWrapp__item menuWrapp__item--carier">
            <span>
              Departament <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              <a href="#" className="menuWrapp__drop-link">
                Writing
              </a>
              <a href="#" className="menuWrapp__drop-link">
              Production
              </a>
              <a href="#" className="menuWrapp__drop-link">
                Directing
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="carierwrapp__body">
      <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Movies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combineCast.map((movie) => (
            <TableRow key={movie.credit_id} >
              <TableCell component="th" scope="row" style={movie.title?{display:'block'}: {display:'none'}}>
                {movie.title}
              </TableCell>
            </TableRow>
          ))}
         
        
        </TableBody>
      </Table>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>TV SHOWS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combineCast.map((movie) => (
            <TableRow key={movie.credit_id}>
              <TableCell component="th" scope="row" style={movie.name?{display:'block'}: {display:'none'}}>
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
