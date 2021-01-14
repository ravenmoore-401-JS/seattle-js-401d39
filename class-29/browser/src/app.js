import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter, Link } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';


class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state =
  //   {
  //     array = [],
  //     city = 'washington',
  //     name = 'bob',
  //   }
  // }
  
  render(){
    return(
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        {/* <Link to="banana"><a href="/calendar">Calendar Page</a></Link> */}
      </BrowserRouter>
    )
  }
}

export default App;
