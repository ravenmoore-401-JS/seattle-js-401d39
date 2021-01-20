import React, { useContext } from 'react';
import { WaterfallContext } from '../components/context/waterfall';
import { BurlapSackContext } from '../components/context/burlapSack';

function ContentFunction(props){
  const waterfallContext = useContext(WaterfallContext);
  const burlapSackContext = useContext(BurlapSackContext);
  
  const handleClick = e => {
    burlapSackContext.toggleColor('blue');
  }

  return(
    <div>
      <h2>Hello from the Functional Content!</h2>
      <p>height:{waterfallContext.height}</p>
      <p>Thread Count: {burlapSackContext.threadCount}</p>
      <button onClick={handleClick}>change color of sack</button>
    </div>
  )
}

export default ContentFunction;
