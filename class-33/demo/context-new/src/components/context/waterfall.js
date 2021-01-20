import React from 'react';

export const WaterfallContext = React.createContext();

class Waterfall extends React.Component{
  constructor(props){
    super(props);
    this.state={
      direction: 'down',
      height: 145,
      temp: 100,
      numPeeps: 23
    }
  }

  render(){
    return(
      <WaterfallContext.Provider value={this.state}>
        {this.props.children}
      </WaterfallContext.Provider>
    )
  }
}

export default Waterfall;