import React, { FC } from "react";
import Pagination from "@material-ui/lab/Pagination";

type PropsType = {
  handalePageChange: (e: any, value: number) => void;
  totalPages: number | undefined;
  page?:number
};
const moveToTop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  })
}

const Paginator: FC<PropsType> = ({ handalePageChange, totalPages ,page}) => {
  return (
    <div className='paginator'>
      <Pagination onChange={handalePageChange} count={totalPages} onClick={moveToTop} page={page}/>
    </div>
  );
};

export default Paginator;
