import React from 'react';

export const BurlapSackContext = React.createContext();

class BurlapSack extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fashionable: false,
      fullOf: ['apples', 'potatoes', 'hopes and dreams'],
      threadCount: 2,
      color: 'black',
      toggleColor: this.toggleColor
    }
  }

  toggleColor = (color) => { this.setState({color }) }

  render(){
    console.log(this.state);
    return(
      <BurlapSackContext.Provider value={this.state}>
        {this.props.children}
      </BurlapSackContext.Provider>
    )
  }
}

export default BurlapSack;