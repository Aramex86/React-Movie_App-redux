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
      const fetchdata = async () => {
        const res = await axios(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
        );
        setData(res.data.results);
      };
      fetchdata();
    }, []);
  
   for(let i=0;i<data.length;i++){
       someArray.push(data[i])
   }

    
    return (
        <div className='videowrapp'>
       
        {someArray.slice(0,1).map(video => 
            <div className='videowrapp__title' key={video.id}>
                <span>{title}</span><br/>
                <span>{video.name}</span>
            </div>

            //   <iframe
            //   width="100%"
            //   height={900?'700':'500'}
            //   src={`https://www.youtube.com/embed/${i.key?.slice(0,11)}`}
            //   frameBorder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowFullScreen
            //   title='movie trailer'
            // ></iframe>
           )}
        </div>
    )
}

export default Videos
