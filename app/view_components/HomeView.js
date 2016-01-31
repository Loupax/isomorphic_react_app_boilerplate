import React, {Component} from 'react';
import {Link} from 'react-router';
import Promise from 'bluebird';
import request from 'request';
import {loadGists} from '../actions/gists';
import { connect } from 'react-redux';
import _ from 'lodash';

class HomeView extends Component {
    static resolve({ store }) {
        return store.dispatch(loadGists());
    }

    constructor() {
        super(...arguments);
    }

    render() {
        return <div>
            <h1>My gists</h1>
            {
                _.map(this.props.gists, (gist)=> {
                    return (
                        <p key={gist.id}>
                            <a target="_blank" href={'https://gist.github.com/' + gist.id}>
                                { gist.description }
                            </a>
                        </p>
                    );
                })
            }

        </div>
    }
}


function mapStateToProps(state) {
    return {gists: state.gists};
}

export default connect(mapStateToProps)(HomeView);
