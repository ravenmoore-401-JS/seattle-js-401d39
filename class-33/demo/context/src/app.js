import React from 'react';
import Main from './main';

// step 1: make the context
const WaterfallContext = React.createContext("wet");

class App extends React.Component{
  render(){
    // step 2: wrap everything in the provider
    return(
      <WaterfallContext.Provider value="wet">
        <Main />
      </WaterfallContext.Provider>
    )
  }
}

export default App;