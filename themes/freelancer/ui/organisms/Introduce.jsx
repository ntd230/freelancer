import React from 'react';
import Typing from "organism-react-typing";

const Introduce = (props) => (
    <div style={Styles.container}>
        <div className="hd" style={Styles.hd}>
            {props.hd}
        </div>
        <div className="bd" style={Styles.bd}>
            {props.bd.fixed}
            <Typing color="#fff">
                {props.bd.animation.map((item, key)=>(
                    <div key={key}>{item}</div>
                ))}
            </Typing>
        </div>
        <div className="ft" style={Styles.ft}>
            {props.ft}
        </div>
    </div>
);

export default Introduce;

const Styles = {
    container: {
        position: 'absolute',
        bottom: '10%',
        marginLeft: '25px',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    hd: {
        fontSize: '18px',
        border: '1px solid #fff',
        borderLeft: 'none',
        borderRight: 'none',
        display: 'inline',
        whiteSpace: "nowrap"
    }, 
    bd: {
        font: '50px/1.5 Montserrat,sans-serif',
        fontWeight: '700'
    },
    ft: {
        width: '75%'
    }

    
};
