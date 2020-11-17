export const crewStaff = (props:any,name: string, arr:[{}]) => {
    props.map((i: { job: string; }) => {
      if (i.job === name) {
        arr.push(i);
      }
    });
  };