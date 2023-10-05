/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const News = ({news}) => {
     const {image_url, details, _id, title, total_view, author, rating }=news
     return (
          <div className="border rounded-md mb-8">
               <div className="bg-gray-100">
<div className="flex gap-3 items-center py-2">
<img className="w-9 h-9 rounded-full" src={author?.img} alt="" />
<div>
     <h2 className="text-base font-bold">{author?.name}</h2>
     <p>{author?.published_date}</p>
</div>
</div>
               </div>
               {/* News Details */}
               <div className="px-2">
               <h2 className="text-base font-bold my-2">{title}</h2>
               <img src={image_url} alt="" />
               {
                    details?.length> 200 ? <p className="mt-2">
                         {details.slice(0,200)}
                         <span className="text-blue-600"><Link to={`/details/${_id}`}> Read more...</Link></span></p>  : 
                         <p className="mt-2">{details}</p>
               }
               <hr />
               <div className="flex justify-between">
               <div>
                    <p>{rating?.number}</p>
               </div>
               {/* Total Views */}
               <div>
<p>{total_view}</p>
               </div>
               </div>
               </div>
          </div>
     );
};

export default News;