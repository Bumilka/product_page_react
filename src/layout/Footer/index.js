import React, { Component } from 'react';

import Insta from '../../image/footer/insta.png';
import Fb from '../../image/footer/fb.png';
import IAI from '../../image/footer/iai.png';
import './style.scss'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footerContainers">
                    <ul className="footerContainer">
                        <li>
                            <span className="footerTitle">
                                <span>INFORMACJE</span>
                            </span>
                            <ul className="footerLinks">
                                <li>
                                    <a href="#" title="Informacje o sklepie">
                                        <span> Informacje o sklepie </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wysyłka">
                                        <span> Wysyłka </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Regulamin">
                                        <span> Regulamin </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wysyłka">
                                        <span> Wysyłka </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Polityka o prywatności">
                                        <span> Polityka o prywatności </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Odstapienie od umowy">
                                        <span> Odstapienie od umowy </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="footerContainer">
                        <li>
                            <span className="footerTitle">
                                <span>MOJE KONTO</span>
                            </span>
                            <ul className="footerLinks">
                                <li>
                                    <a href="#" title="Zarejestruj sie ">
                                        <span> Zarejestruj sie </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Moje zamówienia ">
                                        <span> Moje zamówienia </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="RKoszyk">
                                        <span> Koszyk </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Ulubione">
                                        <span> ulubione </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Historia transakcji">
                                        <span> Historia transakcji </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Odstapienie od umowy">
                                        <span> Odstapienie od umowy </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="footerContainer">
                        <li>
                            <span className="footerTitle">
                                <span>KONTAKT</span>
                            </span>
                            <ul className="footerLinks">
                                <li>
                                    <a href="#" title="+48 574 0046 421">
                                        <span style={{ fontSize: '16px' }}> +48 574 0046 421 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Email">
                                        <span style={{ fontSize: '12px' }}> kontakt@assasinarmy.pl </span>
                                    </a>
                                </li>
                                <li style={{ paddingTop: '15px' }}>
                                    <a href="#" title="Regulamin">
                                        <span style={{ paddingRight: '15px' }}> <img src={Fb} /> </span>
                                        <span style={{ paddingRight: '15px' }}> <img src={Insta} /> </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="footerContainer">
                        <li>
                            <span className="footerTitle">
                                <span>MOJE ZAMÓWIENIA</span>
                            </span>
                            <ul className="footerLinks">
                                <li>
                                    <a href="#" title="Sprawdź status zamowienia">
                                        <span> Sprawdź status zamowienia </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Śledź przesyłkę">
                                        <span> Śledź przesyłkę </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Regulamin">
                                        <span> Regulamin </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Zwroty">
                                        <span> Zwroty </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Informacja o wymianie">
                                        <span> Informacja o wymianie </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="footerRWD">
                        <ul className="footerContainerRWD">
                            <li>
                                <ul className="footerLinks">
                                    <li>
                                        <a href="#" title="+48 574 0046 421">
                                            <span style={{ fontSize: '16px' }}> +48 574 0046 421 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Email">
                                            <span style={{ fontSize: '12px' }}> kontakt@assasinarmy.pl </span>
                                        </a>
                                    </li>
                                    <li style={{ paddingTop: '15px' }}>
                                        <a href="#" title="Regulamin">
                                            <span style={{ paddingRight: '15px' }}> <img src={Fb} /> </span>
                                            <span style={{ paddingRight: '15px' }}> <img src={Insta} /> </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="iaiLogo">
                    <img src={IAI} />
                </div>
            </footer>
        );
    }
}

export default Footer;