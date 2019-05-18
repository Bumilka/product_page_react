import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import PLIcon from '../../../../image/top/pl.png';
import './style.scss'


class LoginSection extends Component {
    render() {
        return (
            <div className="loginSection">
                <div className="loginSectionItems">
                    <ul>
                        <li className="optionsSection">
                            <a className="pl">PL</a>
                            <img src={PLIcon} className="plIcon" />
                            <a className="caretIcon"> &#8744;</a>
                        </li>
                        <li className="accountSection">
                            <a><Link to="/">TWOJE KONTO </Link></a>
                        </li>

                        <div className="shopingBagSection">
                            <a className="shopingBag ">
                                <a className="badgeIcon"></a>
                                <b className="userBag"><Link to="/">TWÓJ KOSZYK</Link></b>
                                <strong> 0,00 zł</strong>
                            </a>

                        </div>

                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginSection;