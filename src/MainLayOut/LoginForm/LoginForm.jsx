import { useContext, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { UserContext } from "../SharedFile/Context";



const LoginForm = () => {
     const location = useLocation();
     const navigate = useNavigate();
     const { userLogin } = useContext(UserContext);
     const [alram, setAlram] = useState(null);
     const [show, setShow] = useState(false);
     const handleShow = () => {

          setShow(!show)
     }
     const isStrongPassword = (password) => {

          const regex = /^(?=.*[A-Z])(?=.*\d)/;
          return regex.test(password);
     };

     const emailRef = useRef(null);
     const passwordRef = useRef(null);
     const handleSubmit = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;

          if (password.length < 6) {
               return alert('pass must more then 6 ')
          } else if (!isStrongPassword(password)) {
               return alert('Password must contain at least one capital letter and one number.');
          } else {
               userLogin(email, password)
                    .then((result) => {
                         if (!result.user.emailVerified) {
                              sendEmailVerification(result.user)
                                   .then(() => {
                                        alert('Check your email for verification');

                                   })
                                   .catch()
                              return;
                         }else{
                              alert('Login successful');
                              navigate(location?.state? location.state : '/')
                         }
                         
                         emailRef.current.value = '';
                         passwordRef.current.value = '';
                         setAlram('')
                    })
                    .catch(() => {
                         setAlram('Invalid user email or password');
                    })
          }
          

     }
     return (
          <div className="flex mx-auto h-screen items-center">
               <div className=" w-11/12 md:w-[500px] mx-auto">
                    <div>
                         <form onSubmit={handleSubmit}>
                              <input ref={emailRef} className="border p-2 w-full" type="email" name="email" placeholder="Email..." required />

                              <div className="relative">
                                   <input ref={passwordRef} className="border p-2 w-full my-4"
                                        type={show ? "text" : "password"}
                                        name="password"
                                        placeholder="Password..." required />
                                   <span className="absolute top-6 right-2"><button className="text-xl"
                                        onClick={(e) => {
                                             e.preventDefault(); // Prevent form submission
                                             handleShow(); // Toggle password visibility
                                        }}>{show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button></span>
                              </div>
                              <input className="border p-2 w-full bg-green-400" type="submit" value="Login" />
                         </form>
                         <div className="flex justify-between">
                              <p>If you have no account? Please <Link className="text-blue-800" to={'/registration'}>Registration</Link></p>
                              <p> <Link className="text-blue-800" to={'/forgetPass'}>Forget Password</Link></p>
                         </div>
                    </div>
                    {
                         alram ? <p className="text-red-600">{alram}</p> : ''
                    }
               </div>

          </div>
     );
};

export default LoginForm;