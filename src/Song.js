import React, { Component } from 'react';
import './Song.css';
import Header from './Header';
import Field from './Field';
import {Link, Route, NavLink, withRouter } from 'react-router-dom';
import "./icon/css/fontello.css";
import { BrowserRouter } from 'react-router-dom';


class Song extends Component {

render () {
  var  src ='https://i.ytimg.com/vi/'+this.props.id+'/hqdefault.jpg'
return (
<div onDoubleClick={this.props.linkTo} onMouseOver={this.props.onHover} onMouseLeave={this.props.onLeave}  title={this.props.title}  id={this.props.id}   class="entity"  
 style={this.props.location}>
<img title={this.props.title}  
 onClick={this.props.click} title={this.props.title} 
  id={this.props.id}  
src={src} height={this.props.size}></img>

</div>
)
}
}

export default Song;