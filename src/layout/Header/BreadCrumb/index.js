import React, { Component } from 'react';


class BreadCrumb extends Component {
    render() {
        return (
            <div style={{
                    background: 'url(../../../image/top/background-down.png)',    
                    paddingTop: '15px',
                    paddingBlockEnd: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'start',   
            }}>  
                Strona główna >
            </div>
        );
    }
}

export default BreadCrumb;