import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

class MenuDropdown extends Component {
    constructor() {
        super();

        this.state = {
            displaymenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }
    render() {
        return (
            <div className="menuNavbar">
                <nav className="navbarContainers">
                    <ul className="navbarContainer">
                        <li>
                            <a>
                                <Link to="game-sets" className="navTitle">ZESTAWY DO GRY</Link>
                            </a>
                        </li>
                        <li>
                            <div className="dropdown">
                                <div><Link to="eqipment" className="navTitle" onClick={this.showDropdownMenu}>SPRZĘT &#8744;</Link></div>

                                {this.state.displayMenu ? (
                                    <ul>
                                        <li className="dropdownList"><a href="#">Marker</a></li>
                                        <li className="dropdownList"><a href="#">Egzample 1</a></li>
                                        <li className="dropdownList"><a href="#">Egzample 2</a></li>
                                    </ul>
                                ) :
                                    (
                                        null
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <div><Link to="clothing" className="navTitle" onClick={this.showDropdownMenu}>ODZIEŻ &#8744;</Link></div>

                                {this.state.displayMenu ? (
                                    <ul>
                                        <li className="dropdownList"><a href="#">Egzample 3</a></li>
                                        <li className="dropdownList"><a href="#">Egzample 4</a></li>
                                    </ul>
                                ) :
                                    (
                                        null
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <a><Link to="paints-balls" className="navTitle"> KULKI &#8744;</Link></a>
                        </li>
                        <li>
                            <a><Link to="sale" className="navTitle">WYPRZEDAŻE &#8744;</Link></a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MenuDropdown;