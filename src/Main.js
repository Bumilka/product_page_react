import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layout/Header/index';
import Footer from './layout/Footer';
import Home from './pages/Home/index';
import GameSets from './pages/GameSets/index';
import Equipment from './pages/Equipment/index';
import Clothing from './pages/Clothing/index';
import PaintsBalls from './pages/PaintBalls/index';
import Sale from './pages/Sale/index';

import './main.scss';


export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/game-sets' component={GameSets} />
          <Route exact path='/eqipment' component={Equipment} />
          <Route exact path='/clothing' component={Clothing} />
          <Route exact path='/paints-balls' component={PaintsBalls} />
          <Route exact path='/sale' component={Sale} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
