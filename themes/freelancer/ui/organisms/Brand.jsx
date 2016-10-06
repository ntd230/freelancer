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
        fontWeight:600,
        marginRight: 9,
    },
    brand: {
        padding: '0',
        display: 'inline-block',
        verticalAlign: 'middle',
        color: '#fff',
        fontWeight: 200,
        letterSpacing: '0.081rem',
        fontSize: '1.375rem',
        fontFamily: 'Raleway, sans-serif',
        textTransform: 'uppercase',
        textDecoration: 'none'
    }
};
