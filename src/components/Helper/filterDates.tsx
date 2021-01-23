import { PartsType } from "../../Types/Types";

export const filterDateAsc = (arr: Array<PartsType>) => {
  return arr.sort((a:any, b:any) => {
     const dateA = a.release_date.split('-').reverse().join('');
     const dateB = b.release_date.split('-').reverse().join('');
     const compare = dateA - dateB;
     console.log(compare); 
     return compare;
  });
};
export const filterDateDsc = (arr: Array<PartsType>) => {
  return arr.sort((a:any, b:any) => {
     const dateA = a.release_date.split('-').reverse().join('');
     const dateB = b.release_date.split('-').reverse().join('');
     const compare = dateB-dateA;
     console.log(compare); 
     return compare;
  });
};



//1.convert string to number 
//2. compare numbers