import React from 'react';
import { Link } from 'react-router-dom';


import './style.scss';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a><Link to="/">STRONA GŁÓWNA</Link></a>
                </li>
                <li>
                    <a><Link to="game-sets">ZESTAWY DO GRY</Link></a>
                </li>
                <li>
                    <a><Link to="eqipment">SPRZĘT</Link></a>
                </li>
                <li>
                    <a><Link to="clothing">ODZIEŻ</Link></a>
                </li>
                <li>
                    <a><Link to="paints-balls"> KULKI</Link></a>
                </li>
                <li>
                    <a><Link to="sale">WYPRZEDAŻE</Link></a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;