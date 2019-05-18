import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../image/top/logo.png';

import DrawerToggleButton from '../DrawerToggleButton/index';
import SearcherInput from './SearcherInput/index';
import LoginSection from './LoginSection/index';
import './style.scss';

const Toolbar = props => (
    <div className='toolbar'>
        <nav className='toolbarNavigation'>
            <div className='toolbarToggleButton'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbarLogo'>
                <Link to="/">
                    <img src={Logo} className='toolbarLogoItem' />
                </Link>
            </div>
            <div className="spacer" />
            <div className='toolbarNavigationItems'>
                <ul>
                    <li>
                        <SearcherInput />
                    </li>
                    <li>
                        <LoginSection/>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);



export default Toolbar;