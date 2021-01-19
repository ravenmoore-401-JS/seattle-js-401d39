import { useEffect } from "react";
import { render } from "react-dom";
import { useState } from 'react';

// function Header(props) {
//   const [smallScreen, setSmallScreen] = useState(false);

//   useEffect(() => {
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//   }, []);

//   const checkScreenSize = () => {
//     setSmallScreen(window.innerWidth < 600);
//   }

//   return(
//     <div className={`${smallScreen ? "small" : "large"}`} id="header">
//       <h3>Header</h3>
//       {smallScreen ? 
//       <h3> Welcome small screen user </h3>
//       :
//       <h3> Welcome large screen user </h3>
//      }
//     </div>
//   )
// }


import useSmallScreen from './smallScreen';

function Header(props){
  const isScreenSmall = useSmallScreen();
  
  return(
    <div className={`${isScreenSmall ? "small" : "large"}`} id="header">
      <h3>Header</h3>
      {isScreenSmall ? 
      <h3> Welcome small screen user </h3>
      :
      <h3> Welcome large screen user </h3>
    }
    </div>
  )
}

export default Header;