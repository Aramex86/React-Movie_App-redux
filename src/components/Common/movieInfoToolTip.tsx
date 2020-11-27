import React from "react";
import noPhoto from '../../assets/noPoster.jpg';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

type PropsTypes = {
  poster: string
  poster1: string
  desc: string
  title: string
  id:string
  showTip:string
  hideTooltip:(id:number)=>void
};

const movieInfoToolTip: React.FC<PropsTypes> = ({ poster, desc, title,showTip,id,hideTooltip,poster1 }) => {
  return (<>
     <div className={showTip === id?"tooltipwrap tooltipwrap--show":'tooltipwrap'}>
        <button className='btn btn--tooltipclose' onClick={()=>hideTooltip(+id)}><CancelOutlinedIcon/></button>
      <div className="tooltipwrap__img">
        {poster===null?<img src={`${noPhoto}`} alt="poster"/>:<img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt='poster'/>}
      </div>
      <div className="tooltipwrap__desc">
        <h2 className="tooltipwrap__desc__title">{title}</h2>
        <p className="tooltipwrap__desc__about">{desc.length > 125?`${desc.slice(0,120)}...`:desc}</p>
      </div>
    </div>
  </>);
};

export default movieInfoToolTip;
