import React from 'react';
import Main from './main';
import WaterfallContext from './components/context/waterfall';
import BurlapSackContext from './components/context/burlapSack';

class App extends React.Component{

  render(){
    return(
      <WaterfallContext>
        <BurlapSackContext>
          <Main />
        </BurlapSackContext>
      </WaterfallContext>
    )
  }
}

export default App;