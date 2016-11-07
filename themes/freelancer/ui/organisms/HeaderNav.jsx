import React, {Component} from 'react'; 
import { assign, List, Item, Icon } from 'react-atomic-molecule';
import {SmoothScrollLink} from 'organism-react-scroll-nav';

import IcoDescription from 'ricon/Description';


const NavItem = (props) => {
    const {link, text, icon, targetInfo, handleOn, onClick, ...others} = props;
    let thisIcon = null;
    if (icon) {
        thisIcon = <Icon style={Styles.icon}>{Icons[icon]}</Icon>;
    }
    let activeStyle;
    if (targetInfo.active) {
        activeStyle = Styles.activeStyle;
    }
    let style = assign({},Styles.link,activeStyle);
    return (
    <Item 
        atom="li"
        {...others}
        style={Styles.item}
        onClick={(e)=>{
            onClick(e);
            handleOn(e);
        }}
    >
        <a 
            href={link} 
            style={style}
        >
            {thisIcon}
            {text}
        </a>
    </Item>
    );
};

const HeaderNav = (props) => (
    <List
        atom="ul"
        style={props.style}
        className={props.className}
    >
        { 
            props.nav.link.map((item, key)=>{
                let targetId;
                if (0 === item.indexOf('#')) {
                    targetId = item.substr(1);
                }
                return (
                    <SmoothScrollLink
                        key={key} 
                        link={item}
                        text={props.nav.text[key]}
                        icon={(props.nav.icon[key])?props.nav.icon[key]:null}
                        handleOn={props.handleOn}
                        /*scroll*/
                        container={<NavItem />}
                        targetId={targetId}
                        scrollRefId="header"
                        scrollRefLoc="top"
                    />
                );
            })
        }    
    </List>
)

export default HeaderNav;

const Styles = {
    link: {
        color: '#fff',
        textDecoration: 'none',
        padding: '1.75rem 0.938rem',
        textTransform: 'uppercase',
        fontSize: '0.875rem',
        display: 'block',
    },
    item: {
        listStyle: 'none',
        display: 'inline-block'
    },
    icon: {
        width: 13,
        height: 13,
        marginRight: 7,
        ovarflow: 'hidden'
    },
    svg: {
        fill: '#fff'
    },
    activeStyle: {
        background: '#9f7676'
    }
};

const Icons = {
    description: <IcoDescription style={Styles.svg} />
};
