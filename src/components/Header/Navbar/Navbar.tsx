import * as React from 'react';
import './_Navbar.scss';


class Navbar extends React.Component {
   public render() {
       return (
           <div className="nav">
               <div className="left">
                   <input type="button" className="person btn" src="../src/images/sprites/icons/Rounded Rectangle 5.png"/>
                       <input type="button" className="envelope btn "/>

               </div>
               <div className="right">
                   <input type="button" className="search btn"/>
                           <select className="selectdiv" name="insType">
                               <option value="">ביטוח דירה</option>
                               <option value="">ביטוח רכב</option>
                               <option value=""> ביטוח בריאות</option>
                           </select>
                        <input type="button" className="compie" value="Compie" />
               </div>
           </div>

       );
   }
}

export default Navbar;
