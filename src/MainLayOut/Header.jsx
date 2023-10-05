import moment from 'moment';
import logo from '/src/assets/logo.png'

const Header = () => {
     const currentDate = moment();

     // Format the date and time using 'LLLL' format
     const formattedDate = currentDate.format('dddd, MMMM D, YYYY');
     return (
          <div className="mx-auto">
               <div className="flex justify-center mt-6">
               <img src={logo} alt="" />
               </div>
               <p className="text-center">Journalism Without Fear or Favour</p>
               <p className='text-center'>{formattedDate}</p>
              
               
               
               
          </div>
     );
};

export default Header;