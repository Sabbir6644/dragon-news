import { useContext } from "react";
import { UserContext } from "../SharedFile/Context";


const RightSide = () => {
     const { signInWithGoogle, GithubSignIn } = useContext(UserContext)
     const handleLoginWithGoogle = () => {
          signInWithGoogle()
               .then()
               .catch()
          
     }
     const handleLoginWithGitHub = () => {
          GithubSignIn()
               .then()
               .catch()
       
     }
     return (
          <div>
               <div>
                    <h2 className="text-lg font-bold mb-3">Login with</h2>
                    <button onClick={handleLoginWithGoogle} className="w-full py-1 border mb-2 rounded-md">Login with Google</button>
                    <button onClick={handleLoginWithGitHub} className="w-full py-1 border rounded-md">Login with GitHub</button>
               </div>
               <div className=" my-4">
                    <h2 className="text-lg font-bold mb-3">Find Us On</h2>
                    <button className="w-full py-2 border rounded-t-md">Facebook</button>
                    <button className="w-full py-2 border-x">Twitter</button>
                    <button className="w-full py-2 border rounded-b-md">Instagram</button>
               </div>
               {/* Q zone */}
               <div className="bg-gray-100 p-3">
                    <h2 className="text-lg font-bold mb-3">Q-Zone</h2>
                    <img src="/src/assets/qZone1.png" alt="" />
                    <img src="/src/assets/qZone2.png" alt="" />
                    <img src="/src/assets/qZone3.png" alt="" />
               </div>

               <div className="bg-[url('/src/assets/bg.png')]">
                    <div className="py-6">
                         <h2 className="text-3xl font-bold text-white text-center">
                              Create an Amazing Newspaper</h2>
                         <p className=" my-3 text-white text-center">Discover thousands of options,
                              easy to customize layouts,
                              one-click to import demo and much more.</p>
                         <div className="flex justify-center my-4">
                              <button className="py-3 px-4 bg-red-700 text-white">
                                   Learn More</button>
                         </div>
                    </div>
               </div>



          </div> // Main div end 
     );
};

export default RightSide;