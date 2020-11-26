import React from "react";

type PropsTypes = {
  movie: string
  desc: string
  title: string
  id:number
  showTip:number
  hideTooltip:(id:number)=>void
};

const movieInfoToolTip: React.FC<PropsTypes> = ({ movie, desc, title,showTip,id,hideTooltip, }) => {


  if(showTip === id){
      console.log(showTip,id)
  }

  return (<>
  
     <div className={showTip === id?"tooltipwrap tooltipwrap--show":'tooltipwrap'}>
        <button className='btn' onClick={()=>hideTooltip(id)}>close</button>
      <div className="tooltipwrap__img">
        <img src={`https://image.tmdb.org/t/p/w500/${movie}`} alt="poster" />
      </div>
      <div className="tooltipwrap__desc">
        <h2 className="tooltipwrap__desc__title">{title}</h2>
        <p className="tooltipwrap__desc__about">{desc}</p>
      </div>
    </div>
  </>);
};

export default movieInfoToolTip;
