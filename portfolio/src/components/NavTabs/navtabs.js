// import React from "react";
// import NavTabs from "react-bootstrap/NavTabs"
// import { Link } from "react-router-dom";


// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function NavTabs() {
//     return (

//         <div>
//             <ul className="nav nav-tabs">
//                 <li className="nav-item">
//                     <Link
//                         to="/"
//                         className={
//                             window.location.pathname === "/" || window.location.pathname === "/home"
//                                 ? "nav-link active"
//                                 : "nav-link"
//                         }
//                     >
//                         About
//               </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link
//                         to="/portfolio"
//                         className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
//                     >
//                         Portfolio
//               </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link
//                         to="/contact"
//                         className={window.location.pathname === "../pages/Contact.js" ? "nav-link active" : "nav-link"}
//                     >
//                         Contact
//               </Link>
//                 </li>
//             </ul>
//         </div>

//     );
// }

// export default NavTabs;