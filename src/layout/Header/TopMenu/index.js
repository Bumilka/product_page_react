import React, { Component } from 'react';
import FB from '../../../image/top/fb.png';
import Insta from '../../../image/top/insta.png';
import './style.scss'

class TopMenu extends Component {
    render() {
        return (
            <div className="menuTop">
                <div className="menuTopContainers">
                    <div className="menuTopContainer">
                        <a href="#" className="menuTopItem">
                            <img src={FB} className="menuTopIcon" />
                            <span >
                                Tel: +48 517 989 511
                            </span>
                        </a>
                        <a href="#" className="menuTopItem">
                            <img src={Insta} className="menuTopIcon" />
                            <span >
                                Email: sklep@assassins-arms.com
                            </span>
                        </a>
                        <a href="#" className="menuTopItem">
                            <img src={FB} className="menuTopIcon" />
                            <span >
                                Tel: +48 517 989 511
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopMenu;