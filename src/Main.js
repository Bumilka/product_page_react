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
import TippmanFT50 from './pages/Products/ProductsItems/Marker/Tippmann/Items/TippmannFT50';

import './main.scss';


export default () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>      
            <Route exact path='/' component={Home} />
            <Route exact path='/game-sets' component={GameSets} />
            <Route exact path='/eqipment' component={Equipment} />
            <Route exact path='/clothing' component={Clothing} />
            <Route exact path='/paints-balls' component={PaintsBalls} />
            <Route exact path='/sale' component={Sale} />
            <Route exact path="/marker-tippmann" component={TippmanFT50}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
