import React, {FC, useEffect} from 'react';
import Pagination from '@material-ui/lab/Pagination';

type PropsType = {
  handalePageChange: (e: any, value: number) => void;
  totalPages: number;
};

const Paginator: FC<PropsType> = ({handalePageChange, totalPages}) => {
  return (
    <div>
      <Pagination onChange={handalePageChange} count={totalPages} />
    </div>
  );
};

export default Paginator;
