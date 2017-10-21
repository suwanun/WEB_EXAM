import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class Home1 extends React.Component {
  render() {
    return (
      <BrowserRouter>
      	<ul>
            <li><NavLink to="/" activeClassName="active">Get Data</NavLink></li>
            <li><NavLink to="/Clear" activeClassName="active">Clear</NavLink></li> 
        </ul>
        </BrowserRouter>
    );
  }
}

export default Home1;
