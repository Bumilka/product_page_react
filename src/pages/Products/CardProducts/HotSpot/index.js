import React, { Component } from 'react';
import Mask from '../../../../image/podady_blog/mask.jpg';
import Dot from '../../../../image/dot.png';

import './style.scss'



class Hotspot extends Component {
    render() {
        return (
            <div className='hotSpotSectionContainers'>
                    <div className="hotSpotSectionTitle">
                        <img src={Dot} />
                        <a><span>DOBIERZ DO KOMPLETU</span></a>
                    </div>
                <div className="hotSpotSectionContainer">
                    <div className="hotSpotSectionColumn">
                    <div>
                            <img src={Mask} className="hotSpotSectionImage" />
                        </div>
                        <div className="hotSpotSectionName">
                            <a ><span>MASKA EMPIRE E_FLEX <br /> GOOGLE (BLACK) <br/></span></a>
                            <b className="hotSpotSectionPrice"><span>139,00 zł</span></b>
                        </div>
                    </div>
                    <div className="hotSpotSectionColumn">
                    <div>
                            <img src={Mask} className="hotSpotSectionImage" />
                        </div>
                        <div className="hotSpotSectionName">
                            <a ><span>MASKA EMPIRE E_FLEX <br /> GOOGLE (BLACK) <br/></span></a>
                            <b className="hotSpotSectionPrice"><span>139,00 zł</span></b>
                        </div>
                    </div>
                    <div className="hotSpotSectionColumn">
                        <div>
                            <img src={Mask} className="hotSpotSectionImage" />
                        </div>
                        <div className="hotSpotSectionName">
                            <a ><span>MASKA EMPIRE E_FLEX <br /> GOOGLE (BLACK) <br/></span></a>
                            <b className="hotSpotSectionPrice"><span>139,00 zł</span></b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hotspot;