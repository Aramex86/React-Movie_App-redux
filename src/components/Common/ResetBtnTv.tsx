import React,{FC} from "react";
import { useSelector } from "react-redux";
import { showSortSelector } from "../Store/Selectors/Tvselector";
import { AppStateType } from "../Store/store";


type PropsType={
    handleDisableBtn:()=>void;
}

const ResetBtn:FC<PropsType> = ({handleDisableBtn}) => {
  const showSortedTv = useSelector((state: AppStateType) =>
    showSortSelector(state)
  );

  return (<>
    <button
      className={
        showSortedTv
          ? "btn btn--search_filter"
          : "btn btn--search_filter-disabled"
      }
      disabled={showSortedTv ? false : true}
      onClick={handleDisableBtn}
    >
      Reset
    </button>
  </>);
};

export default ResetBtn;
