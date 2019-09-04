import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Field from './Field';
import YTArea from './YTArea';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>

                    <Route path={'/:id?'} component={Header} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;