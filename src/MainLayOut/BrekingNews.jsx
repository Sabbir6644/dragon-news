import Marquee from "react-fast-marquee";
const BrekingNews = () => {
     return (
          <div className='mx-auto px-3 py-1 mt-3 shadow-lg bg-gray-200 flex gap-8 items-center'>
               <div><button className='bg-red-600 text-white py-1 px-3'>Latest</button> </div>
               <div>
                    <Marquee><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem odit officia quasi possimus molestiae nemo culpa ex incidunt architecto.</p></Marquee>
               </div>
          </div>
     );
};

export default BrekingNews;