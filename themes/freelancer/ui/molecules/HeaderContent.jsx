import React, {Component} from 'react'; 
import { Header, Content } from 'react-atomic-molecule';
import HighLighter from 'organism-react-tag-highlight';
import { ContentBlock } from 'pmvc_react_landing';

import SvgBlackBlock from '../molecules/SvgBlackBlock';

const HeaderContent = (props) => ( 
    <SvgBlackBlock style={Styles.container}>
        <Header ui={false} style={Styles.header}>
            <HighLighter bStyle={Styles.b}>{props.header}</HighLighter>
        </Header>
        <Content style={Styles.content}>{props.content}</Content>
    </SvgBlackBlock>
);

export default HeaderContent;

const Styles = {
    container: {
        fontFamily: "Raleway,sans-serif",
        lineHeight: 1.5,
        fontWeight: 200,
    },
    header: {
        fontSize: "2.813rem",
        textAlign: 'center',
    },
    b: {
        color: "#00ffea",
        fontWeight: 200,
    },
    content: {
        fontSize:'1.25rem',
        textAlign: 'center',
    }
};
