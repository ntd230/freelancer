import React, {Component} from 'react'; 
import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule';

import { pageStore } from 'reshow'; 

class Header extends Component 
{
    render(){
        const pageState = pageStore.getState();
        return (
            <SemanticUI style={Styles.header} className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <Brand 
                    url={pageState.get('freelancerHost')}
                    name={pageState.get('freelancerFirstName')}
                    meta={pageState.get('freelancerLastName')}
                />
                <HeaderNav 
                    style={Styles.headerNav}
                    className="home-menu"
                    nav={pageState.get('nav').toJS()}
                />
            </SemanticUI>
        );
    }
}

const Styles = {
    header: {
        background: 'transparent',
        position: 'fixed',
        zIndex: '2',
        width: '100%'
    },
    headerNav: {
        display: 'inline-block'
    }
};


export default Header;
