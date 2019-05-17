import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

class Menu extends Component {
    render() {
        return (
            <div className="menuNavbar">
                <nav className="navbarContainers">
                    <ul className="navbarContainer">
                        <li>
                            <a className="navLink"> <Link to="game-sets" className="navLink">ZESTAWY DO GRY</Link></a>
                        </li>
                        <li>
                            <a><Link to="eqipment"  className="navLink">SPRZĘT</Link></a>
                        </li>
                        <li>
                            <a><Link to="clothing"  className="navLink">ODZIEŻ</Link></a>
                        </li>
                        <li>
                            <a><Link to="paints-balls"  className="navLink"> KULKI</Link></a>
                        </li>
                        <li>
                            <a><Link to="sale"  className="navLink">WYPRZEDAŻE</Link></a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;