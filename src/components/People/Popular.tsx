import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { popularSelector } from '../Store/Selectors/PeopleSelector';
import { AppStateType } from '../Store/store';
import Paginatior from '../Common/Paginator';
import { requestPopularPeople } from '../Store/Reducers/PeopleReducer';
import PeopleCard from '../Common/PeopleCard';

const Popular: FC = () => {
    const popularPeople = useSelector((state: AppStateType) =>
    popularSelector(state)
    );
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
  
      useEffect(() => {
       dispatch(requestPopularPeople(page))
    }, [page]);
  
    const handalePageChange=(e:any,value:number)=>{
      setPage(value);
    }
    return (
      <>
        <div className="peoplewrapp">
        <h1 className="heading">Popular People</h1>
          <div className="peoplewrapp__people">
            {popularPeople?.results.map((p, index) => (
              <Link
                to='some super HEro'/* {`/movie-card/${p.id}`} */
                key={index}
                className="peoplewrapp__link"
                target="_blank"
              >
                <PeopleCard name={p.name} photo={p.profile_path} tapes={p.known_for}/>

                
               
              </Link>
            ))}
            <Paginatior
              handalePageChange={handalePageChange}
              totalPages={popularPeople?.total_pages}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Popular;