import React, { FC } from "react";
import Pagination from "@material-ui/lab/Pagination";

type PropsType = {
  handalePageChange: (e: any, value: number) => void;
  totalPages: number | undefined;
};

const Paginator: FC<PropsType> = ({ handalePageChange, totalPages }) => {
  return (
    <div className='paginator'>
      <Pagination onChange={handalePageChange} count={totalPages} />
    </div>
  );
};

export default Paginator;
