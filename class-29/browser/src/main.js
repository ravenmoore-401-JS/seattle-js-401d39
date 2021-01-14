import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import List from './list';
import BananaBread from './bananaBread';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bananas:['red bananas', 'ladyfingers', 'cavendish']
    }
  }
  render(){
    return (
      <div id="main">
        <h3>Main</h3>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/banana">
            <List>
              {this.state.bananas}
            </List>
          </Route>
          <Route path="/banana-bread">
            <BananaBread />
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Main;