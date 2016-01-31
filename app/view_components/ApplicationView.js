import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class ApplicationView extends Component {

    componentDidMount() {
        window.addEventListener("dragover", function (e) {
            e = e || event;
            e.preventDefault();
        }, false);
        window.addEventListener("drop", function (e) {
            e = e || event;
            e.preventDefault();
        }, false);
    }

    constructor() {
        super(...arguments);
    }

    render() {
        return <div>
            <h1>Hello and welcome to my isomorphic React app! Server side and async data fetching for everyone!</h1>
            {this.props.children}
        </div>
    }
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ApplicationView);
