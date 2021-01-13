import React from 'react';

class Form extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          display: false,
          url: '',
          method: ''
      }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    this.setState({ url });

    try{
    // need to go to an actual api and get information
    var poke = await fetch(url, {method: this.state.method || 'GET', mode: 'cors'})
    } catch(err){
      console.error(err);
    }
    try{
      // console.log('this is my data', poke.headers.entries);
      let data = await poke.json();
      let headers = {};

      // {'foo':'bar',
      //   'a':'b'
      // }
      // [
      //   ['foo', 'bar'],
      //   ['a', 'b']
      // ]
      // poke.headers.entries = ['foo', 'bar']
      // headers{
      //  'foo': 'bar'
      //}

      for(let pair of poke.headers.entries()){
        headers[pair[0]]=pair[1]
      }

      // console.log('headers', headers);

      this.props.giveAppTheHeaders(headers);
      
    } catch(err){
      console.error(err);
    }

    if(this.state.method){ this.setState({ display: true })}
  }

  handleClick = e => {
    const method = e.target.name;
    this.setState({ method });

    if(this.state.url){ this.setState({ display: true })}
  }

  render(){
    // console.log('this is my state', this.state)
      return(
        <div id="form">
          <form onSubmit={this.handleSubmit}>
            <input name="url" placeholder="enter a url" type="text" />
            <button type="submit">Submit</button>
          </form>
          <div onClick={this.handleClick}>
            <button name="get">GET</button>
            <button name="put">PUT</button>
            <button name="post">POST</button>
            <button name="delete">DELETE</button>
          </div>

          {!this.state.display ? "" :
          <div>
            <h3>URL: {this.state.url}</h3>
            <h3>METHOD: {this.state.method}</h3>
          </div>
          }

        </div>
      )
  }
}

export default Form;