import React, { Component } from 'react';
import './App.css';
import './Songs.css';
import Header from './Header';
import Field from './Field';
import {Link, Route, NavLink } from 'react-router-dom';
import Song from './Song';
import { BrowserRouter } from 'react-router-dom';
import randoom from 'random-int';
import axios from './axios-song';




class Songs extends Component {
   
    constructor(props) {
        super(props);

        /* fetch(this.props.fetchData )
        .then(res => res.json()).then((result) => this.setState({songs: result})).then(()=> this.setMaxCount());
        
 */
 


    this.state = {

        mainTitle: "",
        loaded: false,
        intervalSong: null,
        maxCount: null,
        songCount: null,
        fetchFrom: null,
        ytID:  "",
        

        songs: [  
        ]
    }
}



    componentWillMount () {

     /*    fetch("http://localhost:5000/api/radio/allradiosongs/" + this.state.fetchFrom )
        .then(res => res.json()).then((result) => this.setState({songs: result})).then(()=> this.setMaxCount());
         */
      //  console.log("I fetched data from: "  + this.state.fetchFrom )



      console.log("COMPONENET WILL MOUNT");
      console.log(this.props);
      console.log(this.props.fetchData);
      
      fetch(this.props.fetchData).then(res => res.json()).then((result) => 
      this.setState({songs: result})).then(() => 
      this.setMaxCount());
      

    }

    componentWillUpdate () {
        
    }



   /*  componentWillUpdate () {
   

     if(this.state.fetchFrom !== this.props.match.params.type )
     {
        
         this.setState({fetchFrom: this.props.match.params.type});
         console.log(this.state.fetchFrom);
         fetch("http://localhost:5000/api/radio/allradiosongs/" + this.state.fetchFrom )
        .then(res => res.json()).then((result) => this.setState({songs: result})).then(()=> this.setMaxCount());
        
     }
   
    } */


    setMaxCount = () => {
        var counts = [];
        this.state.songs.map(song => {counts.push(parseInt(song.count))});
        var max_Count = Math.max(...counts);
        this.setState({maxCount: max_Count});

        this.setState({ytID: this.state.songs[5].videoId});
     
        var note = document.getElementById(this.state.songs[5].videoId)
       
        note.style.boxShadow= '0px  0px 5px 7px rgb(231, 173, 64)';
    }


      setSize = (c) => {
        if (c === 1)
        {
            return  "25px";
        }
        else 
        {
            var result = ((60*(c-this.state.maxCount))/(this.state.maxCount-1)) + 80;
            return result + 'px';
        }
        
      }



    onDbClick = (event) => {

        
      
        
     //  this.props.history.push(event.target.id);
       this.setState({ytID: event.target.id});
        var note = document.getElementById(event.target.id)
       
        note.style.boxShadow= '0px  0px 5px 7px rgb(231, 173, 64)';
        
     }  

    
    onHover = (event) => {
        
        this.setState({mainTitle: event.target.title});
        //////////////////////////////////////////////////
        
        dragElement(document.getElementById(event.target.id));

        function dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
          
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
          }
        }    
    }

        ////////////////////////////////////////////////

        cleanTitle = () => {
            this.setState({mainTitle: ""});

        } 

  render(props) {


   



    let songs = this.state.songs.map(song => {

        return (
            
    <Song title={song.title} yt={song.videoId}  id={song.videoId} linkTo={this.onDbClick} size={this.setSize(parseInt(song.count))} 
    location={{top: song.top, left: song.left,  
        }}
        onHover={this.onHover} onLeave={this.cleanTitle} 
        count={song.count} />
        )
    })

    return (
      <div>
      
      <Field play={this.state.ytID} /> 


      <div class="title"> {this.state.mainTitle} {this.state.songCount} </div>

     
        {songs}
       

      </div>
    );
  }
}

export default Songs;