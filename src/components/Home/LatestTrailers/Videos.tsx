import React, { FC, useEffect, useState } from 'react'
import axios from "axios";
import { api_key } from "../../../Api/Api";
import { VideoType } from '../../../Types/Types';

type PropsType = {
    //popularMovies: Array<PopularType>;
    //trailers: string
    id: number;
    title: string;
  };

const Videos:FC<PropsType> = ({id,title}) => {
    const [data, setData] = useState([]);

    const someArray = [] as Array<VideoType>
  
    useEffect(() => {
      let mounted =true;
      const fetchdata = async () => {
        if(mounted){
        const res = await axios(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
        );
        setData(res.data.results);
        }
      };
      fetchdata();
      return ()=>{
        mounted= false;
      }

    }, []);
  
   for(let i=0;i<data.length;i++){
       someArray.push(data[i])
   }

    
    return (
   <>
        {someArray.slice(0,1).map(video =>  <div className='videowrapp' key={video.id}>
            <div className='videowrapp__title' key={video.id}>
                <span>{title}</span><br/>
                <span>{video.name}</span>
            </div>
             <div className='videowrapp__modal'>
             <iframe
              width="100%"
              height={900?'700':'500'}
              src={`https://www.youtube.com/embed/${video.key?.slice(0,11)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title='movie trailer'
            ></iframe>
            </div>
        </div>
           )}
    </>)
}

export default Videos
