import React, {Component} from 'react'; 

import { List, Item } from 'react-atomic-molecule';

import IcoDescription from '../molecules/IcoDescription';

const Icons = {
    description: <IcoDescription />
};

const NavItem = (props) => (
    <Item style={Styles.item}>
        <a href={props.link} style={Styles.link}>
            {()=>{if(props.icon){return Icons[props.icon];}}()}
            {props.text}
        </a>
    </Item>
)

const HeaderNav = (props) => (
    <List atom="ul" style={props.style}>
        { 
            props.nav.link.map((item, key)=>
                <NavItem key={key} 
                    link={item}
                    text={props.nav.text[key]}
                    icon={(props.nav.icon[key])?props.nav.icon[key]:null}
                />
            )
        }    
    </List>
)

export default HeaderNav;

const Styles = {
    link: {
        color: '#fff',
        textDecoration: 'none',
        padding: '.5em 1em'
    },
    item: {
        listStyle: 'none',
        display: 'inline-block'
    }
};
