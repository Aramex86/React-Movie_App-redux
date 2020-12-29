import React, { FC } from 'react'
import { AllMediaType } from '../../Types/Types'

type PropsType={
    name:string,
    photo:string
    tapes: Array<AllMediaType>
}


const PeopleCard:FC<PropsType> = ({name,photo,tapes}) => {

    const movies = tapes.map(item=> item.title)

    console.log(movies)

    return (
        <div className='card__wrap'>
        <div className='card__wrap_img'>
            <img src={`https://image.tmdb.org/t/p/w500${photo}`} alt=""/>
        </div>
         <div className='card__wrap_desc'>
             <span>{name}</span>
             <br/>
             <span>{movies}</span>

             </div>  
        </div>
    )
}

export default PeopleCard
