import React, {Component} from 'react'; 
import Home from './Home';
import Reshow from 'reshow'; 

class Index extends Component
{

   render(){
        let themes = {
            home: <Home />,
        };
        return (
            <Reshow
                themes={themes}
                {...this.props}
            />
        );  
    }
}

export default Index;
