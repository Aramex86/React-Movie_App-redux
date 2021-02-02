import React,{FC} from "react";
import { useSelector } from "react-redux";
import { showSortselector } from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";


type PropsType={
    handleDisableBtn:()=>void;
}

const ResetBtn:FC<PropsType> = ({handleDisableBtn}) => {
  const showSortedMov = useSelector((state: AppStateType) =>
  showSortselector(state)
  );

  return (<>
    <button
      className={
        showSortedMov
          ? "btn btn--search_filter"
          : "btn btn--search_filter-disabled"
      }
      disabled={showSortedMov ? false : true}
      onClick={handleDisableBtn}
    >
      Reset
    </button>
  </>);
};

export default ResetBtn;
