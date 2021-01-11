import React from 'react';
import Header from './header';
import './app.scss';

class Footer extends React.Component {
  render(){
    return(
      <footer>I know best</footer>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'nothing to see here',
    }
  }

  handleWords = e => {
    let newWords = e.target.value;
    this.setState({ words: newWords });
  }

  handleClick = e => {
    e.preventDefault();
    let newWords = this.state.words.split('').reverse().join('');
    this.setState({  words: newWords });
  }
  
  render() {
    return (
      <>
        <Header />
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWords} />
        <button onClick={this.handleClick}>Click Me</button>
        <Footer />
      </>
    )
  }
}

export default App;