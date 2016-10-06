import React, {Component} from 'react'; 

import { List, Item } from 'react-atomic-molecule';

import IcoDescription from '../molecules/IcoDescription';

const Icons = {
    description: <IcoDescription />
};

const NavItem = (props) => {
    const {link, text, icon, ...others} = props;
    return (
    <Item style={Styles.item} {...others}>
        <a href={link} style={Styles.link}>
            {()=>{
                if(icon){
                    return React.cloneElement(
                        Icons[icon],
                        {
                            style: Styles.icon
                        }
                    );
                } else {
                    return null;
                }
            }()}
            {text}
        </a>
    </Item>
    );
};

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
        padding: '1.75rem 0.938rem 0.938em',
        textTransform: 'uppercase',
        fontSize: '0.875rem',
    },
    item: {
        listStyle: 'none',
        display: 'inline-block'
    },
    icon: {
        width: 16,
        height: 16,
        position: 'relative',
        top: 3,
        marginRight: 7,
    }
};
