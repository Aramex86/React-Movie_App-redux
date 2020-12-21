import React, { FC } from "react";
import Pagination from "@material-ui/lab/Pagination";

type PropsType = {
  handalePageChange: (e: any, value: number) => void;
  totalPages: number | undefined;
};
const moveToTop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  })
}

const Paginator: FC<PropsType> = ({ handalePageChange, totalPages }) => {
  return (
    <div className='paginator'>
      <Pagination onChange={handalePageChange} count={totalPages} onClick={moveToTop}/>
    </div>
  );
};

export default Paginator;
