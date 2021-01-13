import React from 'react';
import Form from './form';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headers: {}
    }
  }

  collectHeaders = (headers) => {
    console.log('App got the Headers!!!', headers)
    this.setState({ headers });
  }

  render(){
    console.log('App state:', this.state);
    return(
      <Form 
        giveAppTheHeaders={this.collectHeaders}
      />
    )
  }
}

export default App;
