import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../image/top/logo.png';

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
                    <img src={Logo} className='toolbarLogoItem' />
                </Link>
            </div>
            <div className='toolbarNavigationItems'>
                <input/>Wpisz czego szukasz .. 
                <button>YY</button>
            </div>
            <div className="spacer" />
            <div className='toolbarNavigationItems'>
                <ul>
                    <li>
                        <Link to="profile_provider">PROFIL FIRMA</Link>
                        <img src={Logo} herf='/profile_provider' className="providerIconToolbar"/>
                    </li>
                    <li>
                        <a><Link to="profile_user">MÓJ PROFIL</Link></a>
                        <img src={Logo} herf='/profile_user' className="userIconToolbar"/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);



export default Toolbar;