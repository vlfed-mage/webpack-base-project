import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return <div className='react__app'>sample1</div>

        // you can use pug(jade) inside react in this way

        // return pug`
        //     .some-app
        // `
    }
}