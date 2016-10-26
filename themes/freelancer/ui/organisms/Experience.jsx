import React from 'react'; 
import { EventTimeline } from 'organism-react-event-timeline'; 

import WhiteBlock from '../molecules/WhiteBlock';
import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';

const Experience = (props)=>
{
    const {header, content, events} = props;
    let arrEvent = [];
    events.header.forEach((item, k)=>{
        console.log(item);
        arrEvent.push({
            header: item,
            description: events.content[k].split('[br]'),
            from: events.from[k].split(','),
            to: events.to[k].split(',')
        });
    });
    return (
       <div style={Styles.container}>
       <WhiteBlock>
            <Header style={Styles.header}>
                {header}
            </Header>
            <Content style={Styles.content}>
                {content}
            </Content>
            <EventTimeline
                events={arrEvent}
            />
       </WhiteBlock>
       </div>
    );
}

export default Experience;

const Styles = {
    container: {
        background: 'url(http://freelancer.ntd230.com/photos/pattern.svg)',
        color: '#fff',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
};

