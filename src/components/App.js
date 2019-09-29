import React, { Component } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import MainLayouts from './Layouts/MainLayouts'
import AppRoute from './Layouts/AppRoute'
import Home from './Home/Home'
import Page from './Page/Page'

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <>
                <HashRouter>
                    <Switch>
                        <AppRoute exact path="/"
                                  layout={MainLayouts}
                                  component={Home}
                        />
                        <AppRoute exact path="/page"
                                  layout={MainLayouts}
                                  component={Page}
                        />
                    </Switch>
                </HashRouter>
            </>
        );
    }
}

export default App;
