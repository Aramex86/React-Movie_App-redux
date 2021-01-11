export const crewStaff = (props:any,name: string, arr:[{}]) => {
    props.map((i: { job: string; }) => {
      if (i.job === name) {
        arr.push(i);
      }
    });
  };
export const crewStaffTV = (props:any,name: string, arr:[{}]) => {
    props.map((i: { known_for_department: string; }) => {
      if (i.known_for_department === name) {
        arr.push(i);
      }
    });
  };