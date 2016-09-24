import React, {Component} from 'react'; 
import Animate from "organism-react-scroll-animate";
import { Content, assign } from 'react-atomic-molecule';

const AnimateContent = (props) => ( 
    <Animate once={true} enter="fadeInRight-600">
        <Content {...props} style={assign(
                {},
                Styles.text,
                props.style
        )}
        />
    </Animate>
);

export default AnimateContent;

const Styles = {
    text: {
        fontFamily: "Raleway,sans-serif",
        textAlign: "center",
        fontSize: "1.125rem",
        lineHeight: 1.7,
    }
};
