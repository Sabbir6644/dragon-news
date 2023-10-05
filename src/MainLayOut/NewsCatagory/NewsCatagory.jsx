import { useEffect, useState } from "react";
import Catagory from "./Catagory";

const NewsCatagory = () => {
     const [loadData, setLoadData]=useState();
     useEffect(()=>{
fetch('/categories.json')
.then(res=> res.json())
.then(data => setLoadData(data))
     },[])
     // console.log(loadData);
     return (
          <div>
              <h2 className="text-lg font-bold">All Caterogy</h2> 
              {
               loadData?.map(data=><Catagory key={data.id} data={data}></Catagory>)
              }
              
              <div>

              </div>
          </div>
     );
};

export default NewsCatagory;