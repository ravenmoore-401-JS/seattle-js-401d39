import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <div id="header">
        <h3>Header</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <a href="/">Home</a>
              </Link>
            </li>

            <li>
              <Link to="/banana">
                <a href="/banana">banana list</a>
              </Link>
            </li>

            <li>
              <Link to="/banana-bread">
                <a href="/banana-bread">banana bread</a>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Header;