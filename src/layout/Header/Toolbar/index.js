import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../image/top/logo.png';
import Search from '../../../image/top/search.png'

import DrawerToggleButton from '../DrawerToggleButton/index';
import './style.scss';

const Toolbar = props => (
    <div className='toolbar'>
        <nav className='toolbarContainers'>
            <div className="toolbarContainer">
                <ul className='toolbarToggleButton'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </ul>
                <ul className='toolbarLogo'>
                    <Link to="/">
                        <img src={Logo} className='toolbarLogo' />
                    </Link>
                </ul>
                <div className="spacer" />
                <div className='toolbarItems'>
                    <ul>
                      
                                <input className="searcher" placeholder="Wpisz czego szukasz..." />
                                <button className="searchButton" type="submit"> </button>
                            
                       
                    </ul>
                    <ul>
                        <a>PL</a>
                        <input className="languageChange" />
                    </ul>
                    <ul>
                        <a><Link to="/">TWOJE KONTO</Link></a>
                    </ul>
                    <ul>
                        <a  className="toolbarShopingBag"><Link to="/">TWÓJ KOSZYK</Link></a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);



export default Toolbar;