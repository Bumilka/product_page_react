import React, { Component } from 'react';
import './style.scss'

import NegoImg from '../../../../image/projector/return.png';
import  Installment from '../../../../image/projector/installment.png';
import  Security from '../../../../image/projector/security.jpg';
import  Shiping from '../../../../image/projector/shiping.png';

class InformationProjector extends Component {
    render() {
        return (
            <div className="informationSection">
                <div className="informationRow">
                    <div className="informationItems" >
                        <img src={Shiping} className="informationImage" />
                        <div >
                            <b>DARMOWA DOSTAWA</b>
                            <li><a>Dla zamówień powyzej 600 zł</a></li>
                        </div>
                    </div>
                    <div className="informationItems" >
                        <img src={Installment} className="informationImage" />
                        <div >
                            <b>ZAKUPY NA RATY</b>
                            <li><a>OBLICZ RATĘ >> </a></li>
                        </div>
                    </div>
                </div>
                <div className="informationRow">
                    <div className="informationItems" >
                        <img src={NegoImg} className="informationImage" />
                        <div >
                            <b>ZWROT TOWARU</b>
                            <li><a>Od 14 dni od daty zakupu</a></li>
                        </div>
                    </div>
                    <div className="informationItems" >
                        <img src={Security} className="informationImage" />
                        <div >
                            <b className="informationText">GWARANCJA 12 MIESIĘCY</b>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InformationProjector;