//import liraries
import React, { Component } from 'react';
import Main from './activities/Main'
import showPost from './activities/showPost'

import {Router , Scene } from 'react-native-router-flux'

// create a component
export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Main" component={Main} initial={true} hideNavBar="true" title="Main" />
                    <Scene key="showPost" component={showPost} hideNavBar="true" title="post" />
                </Scene>
            </Router>
        );

    }
}