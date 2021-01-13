import React from 'react';
import Modal from './modal';
import List from './list';
import If from './if';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      display:true
    }
  }

  render(){
    return(
      <div id="app">
        <If condition={this.state.display}>
          <Modal />
        </If>
      </div>
    )
  }
}

export default App;