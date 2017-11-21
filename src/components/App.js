import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import ToDo from './ToDo';
import Menu from './Menu';


export default class App extends React.Component {

    render() {
        return (
            <div className="container">
            <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/todo" component={ToDo} />
                </Switch>
            </div>
        )
    }
}