

export const filterData=(arr1:any,arr2:any,value:string)=>{
    arr1.filter((item:any) =>{
        if(item.media_type === value){
          arr2.push(item)
        }
    })
}


export const filterDepartament=(arr1:any,arr2:any,value:string)=>{
    arr1.filter((item:any) => {
        if(item.department === value){
           arr2.push(item)
        }
    })
}


