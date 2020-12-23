import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestPopularMovies } from '../Store/Reducers/HomePageReducer';
import { popularSelector } from '../Store/Selectors/HomePageSelector';
import { AppStateType } from '../Store/store';
import Popular from './Popular';

const Movies = () => {
    const  popular = useSelector((state:AppStateType)=>popularSelector(state));
    const dispatch = useDispatch() 
    
    
    useEffect(() => {
       dispatch(requestPopularMovies(1))
    }, []);


    return (
        <div  className='movieswrapp'>
           <Popular popular={popular}/>
        </div>
    )
}

export default Movies
