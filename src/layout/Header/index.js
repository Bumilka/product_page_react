import React, { Component } from 'react';

import Toolbar from './Toolbar/index';
import SideDrawer from './SideDrawer/index';
import Backdrop from './Backdrop/index';
import TopLinks from './TopLinks/index';
import Menu from './Menu/index';

import './style.scss'


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            sideDrawerOpen: false,  
        } 
    }
    /*
    componentDidMount(){
    }
    */
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen:false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <div style={{ height: '100%' }}>
                <TopLinks/>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen}/>
                <Menu/>
                {backdrop}
            
            </div>
        );
    }
}

export default Header;