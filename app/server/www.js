import express from 'express';
import routes from '../routes/routes.js';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import { createLocation } from 'history'
import configureStore from '../store/configureStore';
import path from 'path';
import Promise from 'bluebird';

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '..'));
app.use('/css', express.static('build/css'));
app.use('/js', express.static('build/js'));

app.get('*', (req, res) => {

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        let store = configureStore();
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            getReduxPromise(renderProps, store).then((viewData)=> {
                var html = renderToString(
                    <Provider store={store}>
                        <RoutingContext { ...renderProps}/>
                    </Provider>
                );

                res.render('index.html', {html: html, reduxState: encodeURI(JSON.stringify(store.getState()))});
            }).catch((err)=> {
                res.status(500).send(err.message)
            });
        } else {
            res.status(404).send('Not found!!')
        }
    })
});

function getReduxPromise(renderProps, store) {
    let promises = renderProps.components.filter((component)=> {
        return component && component.resolve;
    }).map((component)=> {
        return component.resolve(Object.assign({'store': store}, renderProps));
    });

    return Promise.all(promises);
}

var server = app.listen(8080, function () {
    console.log('Server is up and running');
});
