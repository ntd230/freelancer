import React, {Component} from 'react'; 

import Geometryangle from 'organism-react-geometryangle';
import { SplashBlock } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';

import Me from '../organisms/Me';
import Introduce from '../organisms/Introduce';

class Cover extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            isRun: true
        };
    }

    componentWillReceiveProps(nextProps)
    {
        const {targetInfo} = nextProps;
        if (targetInfo.active || targetInfo.atTop) {
            this.geo.stop();
            this.setState({
                isRun: false   
            });
        } else {
            this.geo.start();
            this.setState({
                isRun: true   
            });
        }
    }
    
    render()
    {
        const {introduce} = this.props;
        return (
        <SplashBlock style={Styles.cover}>
            <Me />
            <Geometryangle ref={geo=>this.geo=geo}/> 
            <Introduce isRun={this.state.isRun} {...introduce} />
        </SplashBlock>
        );
    }
};

const ScrollCover = (props) =>
    <ScrollReceiver
        {...props}
        targetId="slogan"
        scrollMargin={0}
        container={<Cover />}
    />

export default ScrollCover;


const Styles = {
    cover: {
        minHeight: 350,
        background: '#8e7481'
    }
};
