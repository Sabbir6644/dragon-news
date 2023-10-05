import { useEffect, useState } from "react";
import News from "./News";


const DargonNews = () => {
     const[dragonNews, setDragonNews]= useState();
     useEffect(()=>{
          fetch('/news.json')
          .then(res=>res.json())
          .then(data => setDragonNews(data))
     },[])

     return (
          <div>
               <h2 className="text-lg font-bold mb-3">Dragon News Home</h2>
               {
                    dragonNews?.map(news=><News key={news._id} news={news}></News>)
               }
          </div>
     );
};

export default DargonNews;