import React from 'react';
import ContentClass from './components/content-class';
import ContentFunction from './components/content-function';

class Main extends React.Component{
  render(){
    return(
      <div id="main">
        <h3>main</h3>
        <ContentClass />
        <ContentFunction />
      </div>
    )
  }
}

export default Main;