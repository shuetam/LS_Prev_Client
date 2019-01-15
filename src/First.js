
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';



class First extends Component {

    state = {
        topFirst: '115px',
        topGlass: '565px'
    }

    animated = () => {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                topFirst: '315px', topGlass: '365px'
            })
        }, 1000)
    }


    componentDidMount() {

        this.animated();

    }


    render() {



        return (
            <div >

                <div style={{ top: this.state.topFirst }} className="First">Live<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>S</span>earch</div>
                <div className="glassMain" style={{ top: this.state.topGlass }}>
                    <div>Live<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>S</span>earch</div>
                </div>
                <div className="blurMain">
                </div>

            </div>
        )


    }
}

export default First;