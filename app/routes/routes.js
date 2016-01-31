import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ApplicationView from '../view_components/ApplicationView';
import HomeView from '../view_components/HomeView';


export default (
    <Router>
        <Route component={ApplicationView}>
            <Route path='/' name="home" component={HomeView}/>
        </Route>
    </Router>
);
