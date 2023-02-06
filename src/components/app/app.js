import React, {Component} from 'react';

import { css } from '@emotion/css';

const appStyles = css`
    margin: 50px auto;
    width: 100%;
    max-width: 1440px;

    .container {
        background: #1d1e26;
        border: 4px solid #9580ff;
        border-radius: 6px;
        padding: 25px;
    }
`;

export default class App extends Component {
    render() {
        return (
            <div className={ appStyles }>
                sample1
            </div>
        );

        // you can use pug(jade) inside react in this way

        // return pug`
        //     .some-app
        // `
    }
}