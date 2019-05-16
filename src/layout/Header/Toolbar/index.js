import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../image/top/logo.png';
import Search from '../../../image/top/search.png'

import DrawerToggleButton from '../DrawerToggleButton/index';
import './style.scss';

const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbarNavigation'>
            <div className='toolbarToggleButton'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbarLogo'>
                <Link to="/">
                    <img src={Logo} className='toolbarLogo' />
                </Link>
            </div>
            <div className="spacer" />
            <div className='toolbarNavigationItems'>
                <div>
                    <input className="searcher" placeholder="Wpisz czego szukasz..." />
                    <button className="searchButton" type="submit"> </button>
                </div>
                <div>
                    <a>PL</a>
                    <input className="languageChange" />
                </div>
                <div>
                    <a><Link to="/">TWOJE KONTO</Link></a>
                </div>
                <div>
                    <a><Link to="/">TWÓJ KOSZYK</Link></a>
                </div>
            </div>
        </nav>
    </header>
);



export default Toolbar;