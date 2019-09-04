import React, { Component } from 'react';
import './YTIcon.css';
import Header from './Header';
import Field from './Field';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class YTIcon extends Component {

    render() {
        var src = 'https://i.ytimg.com/vi/' + this.props.id + '/hqdefault.jpg'

        return (
            <div onDoubleClick={this.props.linkTo}

                title={this.props.title} id={this.props.id}
                class="entity"
                style={this.props.location}
                
                >
                <img class="object-fit_cover" title={this.props.title}
                  
                    id={this.props.id}
                    onMouseOver={this.props.onHover}
                    onMouseLeave={this.props.onLeave}
                   
                    src={src} height={this.props.size} style={{ margin: '0px' }} ></img>

            </div>
        )
    }
}

export default YTIcon;