import React, {Component} from 'react'; 

const Brand = (props) => (
    <a href={props.url} style={Styles.brand}>
        <div style={Styles.name}>{props.name}</div>
        {props.meta}
    </a>
)

export default Brand;

const Styles = {
    name: {
        display: 'inline-block',
        fontWeight:700,
        marginRight: 10
    },
    brand: {
        padding: '0',
        display: 'inline-block',
        verticalAlign: 'middle',
        color: '#fff',
        fontWeight: 200,
        fontSize: '120%',
        textDecoration: 'none'
    }
};
