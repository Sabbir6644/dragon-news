
import BrekingNews from "../BrekingNews";
import Header from "../Header";
import Nav from "../Nav/Nav";
import NewsCatagory from "../NewsCatagory/NewsCatagory";
import DargonNews from "./DargonNews";
import RightSide from "./RightSide";

const Home = () => {

     return (
          <div className="max-w-7xl mx-auto">
               <Header></Header>
               <BrekingNews></BrekingNews>
               <Nav></Nav>
               <div className="grid lg:grid-cols-4 gap-3 mt-5">
<div>
     <NewsCatagory></NewsCatagory>
</div>
<div className="col-span-2"><DargonNews></DargonNews></div>
<div>
     <RightSide></RightSide>
</div>
               </div>
               
          </div>
     );
};

export default Home;