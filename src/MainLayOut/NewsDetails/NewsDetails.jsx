/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Header from "../Header";
import RightSide from "../Home/RightSide";
import { UserContext } from "../SharedFile/Context";


const NewsDetails = () => {
     const { data } = useContext(UserContext)
     const { _id } = useParams();
     const foundNews = data?.find((news) => news._id === _id);
     const { image_url, details, title } = foundNews
     return (
          <div className="max-w-7xl mx-auto">
               <Header></Header>
               <h2 className="my-3 text-lg font-bold">Dragon News</h2>
               <div className="grid lg:grid-cols-4 gap-3 p-2 shadow-md">
                    <div className="col-span-3">
                         <div className="px-2">
                              
                              <img className="w-full" src={image_url} alt="" />
                              <h2 className="text-base font-bold my-2">{title}</h2>

                              <p className="mt-2">{details}</p>

                         </div>



                    </div>

                    <div className="col-span-1">
                         <RightSide></RightSide>
                    </div>
               </div>


          </div>
     );
};

export default NewsDetails;