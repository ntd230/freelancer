import React, {Component} from 'react'; 
import Animate from "organism-react-animate";
import { Header } from 'react-atomic-molecule';

import {
    ScrollSpy,
    ScrollReceiver
} from 'organism-react-scroll-nav';

const Show = (props) => {
    const { active, isOnScreen, ...others } = props;
    return (
        <Animate enter="fadeInLeft">
        {()=>{if(isOnScreen){
            return <Header {...others}/> 
        }}()}
        </Animate>
    );
};

const FadeInLeftHeader = (props) => ( 
    <ScrollSpy id={props.id}>
        <ScrollReceiver
            targetId={props.id}
            container={<Show />}
        >
            {props.children}
        </ScrollReceiver>
    </ScrollSpy>
);

export default FadeInLeftHeader;
