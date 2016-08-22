import React, {Component} from 'react'; 
import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule';

const Header = (props) => (
    <SemanticUI style={Styles.header} className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <Brand />
        <HeaderNav style={Styles.headerNav} />
    </SemanticUI>
)

const Styles = {
    header: {
        background: '#2d3e50',
        padding: '0.5em',
        marginBottom: '10px'
    },
    headerNav: {
        display: 'inline-block'
    }
};


export default Header;
