// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Home layout
import DesignerPortfolio from './home/DesignerPortfolio';

// Element Layout
import error404 from "./elements/error404";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DesignerPortfolio}/>


                    {/* Blocks Elements  */}
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
