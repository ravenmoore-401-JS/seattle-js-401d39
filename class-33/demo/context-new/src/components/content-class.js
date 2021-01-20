import React from 'react';
import { WaterfallContext } from '../components/context/waterfall';
import { BurlapSackContext } from '../components/context/burlapSack';

class ContentClass extends React.Component{
  render(){
    return(
      <div id="content-class">
        <h3>I am content from a class component!</h3>
        <WaterfallContext.Consumer>

            {waterfallContext => (
              <p>direction: {waterfallContext.direction}</p>
            )}

        </WaterfallContext.Consumer>

        <BurlapSackContext.Consumer>
          {bananas => (
            <p>{bananas.threadCount}</p>
          )}
        </BurlapSackContext.Consumer>
      </div>
    )
  }
}

export default ContentClass;