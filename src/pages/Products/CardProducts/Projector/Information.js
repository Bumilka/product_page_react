import React, { Component } from 'react';
import './style.scss'

import NegoImg from '../../../../image/projector/return.png';


class InformationProjector extends Component {
    render() {
        return (
        <div>  
            <div className="shipmentData">
              <div className="shipmentDataItems">
                <img src={NegoImg} className="availableButton" />
                <div div className="availableText">
                  <li>Dostepny na magazynie(14szt)</li>
                  <li><b>Wysyłka dzisiaj</b></li>
                </div>
              </div>
              <div className="shipmentDataItems">
                <img src={NegoImg} className="availableButton" />
                <div div className="availableText">
                  <li>Dostepny na magazynie(14szt)</li>
                  <li><b>Wysyłka dzisiaj</b></li>
                </div>
              </div>
            </div>
            <div className="shipmentData">
              <div className="shipmentDataItems">
                <img src={NegoImg} className="availableButton" />
                <div div className="availableText">
                  <li>Dostepny na magazynie(14szt)</li>
                  <li><b>Wysyłka dzisiaj</b></li>
                </div>
              </div>
              <div className="shipmentDataItems">
                <img src={NegoImg} className="availableButton" />
                <div div className="availableText">
                  <li>Dostepny na magazynie(14szt)</li>
                  <li><b>Wysyłka dzisiaj</b></li>
                </div>
              </div>
            </div>
        </div>
        );
    }
}

export default InformationProjector;