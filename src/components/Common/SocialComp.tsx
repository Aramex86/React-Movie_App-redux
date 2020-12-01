import React from "react";
import { ExternalIdsType } from "../../Types/Types";
import {FaTwitter} from 'react-icons/fa'
import {GrFacebook} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiImdb} from 'react-icons/si'


type PropsType = {
    social: ExternalIdsType | null
}

const SocialComp: React.FC<PropsType> = ({social}) => {
   
    console.log(social)

  return (
    <>
      <a href={`https://twitter.com/${social?.twitter_id}`} target='_blank' rel="noreferrer" className="social__wrapp__link"> {social?.twitter_id?<FaTwitter/>:''}</a>
      <a href={`https://facebook.com/${social?.facebook_id}`} target='_blank' rel="noreferrer" className="social__wrapp__link"> {social?.facebook_id?<GrFacebook/>:''}</a>
      <a href={`https://instagram.com/${social?.instagram_id}`} target='_blank' rel="noreferrer" className="social__wrapp__link"> {social?.instagram_id?<AiOutlineInstagram/>:''}</a>
      <a href={`https://www.imdb.com/name/${social?.imdb_id}`} target='_blank' rel="noreferrer" className="social__wrapp__link"> {social?.imdb_id?<SiImdb/>:''}</a>
    </>
  );
};

export default SocialComp;
