import React, { Component } from 'react';
import FB from '../../../image/footer/fb.png'
import './style.scss'

class TopLinks extends Component {
    render() {
        return (
            <div className="topLinks">
                <ul>
                    <li>
                        <img src={FB} />
                        tel +48 517 989 511
                    </li>
                    <li>
                        <img src={FB}/>
                        tel +48 517 989 511
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                        <img src={FB} />
                        tel +48 517 989 511
                    </li>
                </ul>
            </div>
        );
    }
}

export default TopLinks;