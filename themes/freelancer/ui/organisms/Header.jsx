import React, {Component} from 'react'; 
import { 
    assign, 
    reactStyle,
    mixClass,
    SemanticUI 
} from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { PageHeader } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';
import HamburgerIcon from 'ricon/HamburgerToX';

import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 

const HandleScroll = (props)=>
{
    let {targetInfo, style, ...others} = props;
    if (targetInfo.active || targetInfo.atTop) {
       style = assign({}, style, Styles.containerActive);
    }
    return <PageHeader
        {...others}
        style={style}
        styles={reactStyle({
            transition: [[
                'padding 300ms linear',
                'max-height 300ms ease-in-out'
            ].join(', ')] 
        },null,false)}
    />;
}

class Header extends Component
{
    handleOn()
    {
        this.setState({
            on: !this.state.on
        });
    }

    constructor(props) 
    {
        super(props);
        this.state = {
            on: false
        };
        this.handleOn = this.handleOn.bind(this);
        reactStyle({
           color: '#00ffea !important' 
        }, '#header a:hover', 'header-link');
        reactStyle({
           fill: '#00ffea !important' 
        }, '#header a:hover svg', 'header-link-svg');
    }

    render()
    {
    const pageState = pageStore.getState();
    const classes = mixClass(
        'pure-g',
        {
            on: this.state.on
        }
    );
    return (
        <ScrollReceiver
            id="header"
            targetId="design"
            scrollMargin={0}
            container={<HandleScroll />}
            /*common props*/
            style={Styles.container}
            className={classes}
        >
            <Brand 
                url={pageState.get('brandUrl')}
                name={pageState.get('freelancerFirstName')}
                meta={pageState.get('freelancerLastName')}
                className="brand pure-u-1 pure-u-lg-3-8"
            />
            <HeaderNav 
                style={Styles.headerNav}
                className="home-menu"
                nav={pageState.get('nav').toJS()}
                className="pure-u-1 pure-u-lg-5-8"
                handleOn={this.handleOn}
            />
            <HamburgerIcon
                className="hamburger" 
                style={Styles.HamburgerIcon}
                on={this.state.on}
                onClick={this.handleOn}
            />
        </ScrollReceiver>
    );
    }
}
export default Header;

const Styles = {
    container: {
        padding: '1.07rem 3rem'
    },
    headerNav: {
        padding:0,
        margin:0,
        whiteSpace: 'nowrap'
    },
    containerActive: {
        padding: '0 1.75rem',
        background: '#000'
    },
    HamburgerIcon: {
        position: 'absolute',
        top: 10,
        right: 30,
        width: 35,
        height: 35,
        fill: '#fff',
        display: 'none',
        cursor: 'pointer'
    }
};

