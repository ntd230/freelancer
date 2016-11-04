import React, {Component} from 'react'; 
import { EventTimeline } from 'organism-react-event-timeline'; 
import {scrollStore} from 'organism-react-scroll-nav';

import WhiteBlock from '../molecules/WhiteBlock';
import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';

class Experience extends Component
{
    componentDidMount()
    {
        scrollStore.scrollMonitor();
    }

    render()
    {
        const {header, content, events} = this.props;
        let arrEvent = [];
        events.header.forEach((item, k)=>{
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
                    animate={{
                        enter: 'fadeInLeft'
                    }}
                    evenAnimate={{
                        enter: 'fadeInRight'
                    }}
                />
           </WhiteBlock>
           </div>
        );
    }
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

