import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { creditsSelector } from "../../Store/Selectors/MovieSelector";
import { AppStateType } from "../../Store/store";
import { CreditsType} from "../../../Types/Types";

type PropsType = {
  credits: CreditsType |null;
};

type ParamsType = {
  id: string;
};

type PersonType = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};


const PosterStaffPage = ({ credits }: PropsType) => {
  const stafId = useParams<ParamsType>();
  const[person,setPerson]=useState<PersonType>()
  const[credit,setCredit]=useState<CreditsType|null>(credits)

  //let person:Array<PersonType> = [];

 

  useEffect(() => {
    credit?.crew.map((item:any) => {
        if (item.id === +stafId.id) {
            setPerson(item)
        }
      });
    
  }, [person,credit]);

  //console.log(credits?.crew);
  //console.log(stafId.id);
  console.log(person);
  console.log(credit);

  return <div>
      {person?person.name:''}
  </div>;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    credits: creditsSelector(state),
  };
};

export default connect(mapStateToProps, {})(PosterStaffPage);
