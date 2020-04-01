import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { HomePage } from './HomePage';
import { Lagu } from './Lagu';
import { Profil } from './Profil';
import { Navigation } from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <h1><center>Menemukan Lirik Lagu</center></h1>
      </div>
      <Navigation />
      <Switch>
        <Route path='/' component={ HomePage } exact />
        <Route path='/lagu' component={ Lagu } exact />
        <Route path='/profil' component={ Profil } exact />
      </Switch>
      </BrowserRouter>
    );
  }
}



export default App;
