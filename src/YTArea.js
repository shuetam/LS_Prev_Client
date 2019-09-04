import React, { Component } from 'react';
import './App.css';
import './YTArea.css';
import Header from './Header';
import Field from './Field';
import { Link, Route, NavLink } from 'react-router-dom';
import YTIcon from './YTIcon';
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
            ytCount: null,
            fetchFrom: null,
            ytID: "",
            actuallOpacity: 0.4,
            nowPlayed: "",
            playedShadow: '#FFF 0px 0px 5px, 0px 0px 3px 1px rgb(255, 255, 255), 0px 0px 3px 1px rgb(255, 255, 255), 0px 0px 3px 1px rgb(255, 255, 255), 0px 0px 3px 1px rgb(255, 255, 255), #FFF 0px 0px 5px,#FFF 0px 0px 5px,#FFF 0px 0px 5px,#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 10px, #FFF 0px 0px 10px, #FFF 0px 0px 5px, rgb(255, 45, 45) 0px 0px 15px 10px, rgb(255, 45, 45) 0px 0px 10px, rgb(255, 45, 45) 0px 0px 10px, rgb(255, 45, 45) 0px 0px 20px, rgb(255, 45, 45) 0px 0px 2px 5px',
            prevShadow: '#FFF 0px 0px 5px, 0px 0px 3px 1px rgb(255, 255, 255), 0px 0px 3px 1px rgb(255, 255, 255), #FFF 0px 0px 5px,#FFF 0px 0px 5px,#FFF 0px 0px 5px,#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 5px, rgba(231, 173, 64, 0.637) 0px 0px 20px 10px,  rgba(231, 173, 64, 0.637) 0px 0px 10px, rgba(231, 173, 64, 0.637) 0px 0px 10px, rgba(231, 173, 64, 0.637) 0px 0px 20px, rgba(231, 173, 64, 0.637) 0px 0px 2px 5px',


            songs: [
            ],
        }
    }

  //  playedShadow: '#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 5px, rgb(255, 45, 45) 0px 0px 30px 10px, rgb(255, 45, 45) 0px 0px 10px, rgb(255, 45, 45) 0px 0px 10px, rgb(255, 45, 45) 0px 0px 20px, rgb(255, 45, 45) 0px 0px 2px 5px',


    componentWillMount() {

        /*    fetch("http://localhost:5000/api/radio/allradiosongs/" + this.state.fetchFrom )
           .then(res => res.json()).then((result) => this.setState({songs: result})).then(()=> this.setMaxCount());
            */
        //  console.log("I fetched data from: "  + this.state.fetchFrom )



        console.log("COMPONENET WILL MOUNT");
        console.log(this.props);
        console.log(this.props.fetchData);

        fetch(this.props.fetchData).then(res => res.json()).then((result) =>
            this.setState({ songs: result })).then(() =>
                this.setMaxCount());
    }

    componentWillUpdate() {

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
        if (this.state.songs.length > 0) {
            var counts = [];
            this.state.songs.map(song => { counts.push(parseInt(song.count)) });
            var max_Count = Math.max(...counts);
            this.setState({ maxCount: max_Count });

            this.setState({ ytID: this.state.songs[this.state.songs.length - 1].videoId });
           // this.setState({ mainTitle: this.state.songs[this.state.songs.length - 1].title })

            var note = document.getElementById(this.state.songs[this.state.songs.length - 1].videoId)
            this.setState({ nowPlayed: note.id });
            note.style.boxShadow = this.state.playedShadow;

            setTimeout(() => {
              this.setState({
                  loaded: true
              });
              var songs = document.getElementsByClassName("entity");
          }, 2000)
            
        }
        else {
            this.setState({ ytID: 'QRi3ULhyQq0' });
        }

    }


    setSize = (c) => {
        if (c === 1) {
            return "30px";
        }
        if (c === this.state.maxCount && this.state.maxCount === 2) {
            return "50px";
        }
        if (this.state.maxCount === 1) {
            return "30px";
        }
        else {
            var result = ((50 * (c - this.state.maxCount)) / (this.state.maxCount - 1)) + 80;
            return result + 'px';
        }
    }

    nextSongHandler = () => {

        var randomInt = require('random-int');

        var vidID = this.state.songs[randomInt(this.state.songs.length - 1)].videoId;
        this.setState({ ytID: vidID });
        var note = document.getElementById(vidID);

        note.style.boxShadow = this.state.playedShadow;

        var played = document.getElementById(this.state.nowPlayed);
        if (played !== null) {
            played.style.boxShadow = this.state.prevShadow;
        }
        this.setState({ nowPlayed: note.id });
    }



    onDbClick = (event) => {

        //  this.props.history.push(event.target.id);
        var played = document.getElementById(this.state.nowPlayed);
        if (played !== null) {
            played.style.boxShadow = this.state.prevShadow;
           
            
        }
        this.setState({ nowPlayed: event.target.id });
        this.setState({ ytID: event.target.id });
        var note = document.getElementById(event.target.id)
        note.style.boxShadow = this.state.playedShadow;
    }


    onHover = (event) => {

        this.setState({ mainTitle: event.target.title });
        

        var entity = document.getElementById(event.target.id);
        entity.style.transition = 'top 0s, left 0s';
        var opacity = entity.style.opacity;
        console.log("OPACITY ->   " + opacity);
        this.setState({ actuallOpacity: opacity })

        document.getElementById(event.target.id).style.opacity = 1;

        dragElement(document.getElementById(event.target.id));


        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }

    ////////////////////////////////////////////////

    cleanTitle = (event) => {
        this.setState({ mainTitle: "" });
        document.getElementById(event.target.id).style.opacity = this.state.actuallOpacity;
    }

    rangeHandler = (event) => {
        var songs = document.getElementsByClassName("entity");
        for (var i = 0; i < songs.length; i++) {
            songs[i].style.opacity = event.target.value / 100;
        }
    }

        liveSearch = (event) => {  
        var songs = document.getElementsByClassName("entity");
        for (var i = 0; i < songs.length; i++) {
            if(songs[i].title.toString().toLowerCase().includes(event.target.value.toString().toLowerCase()))
            {
                songs[i].style.visibility = 'visible';
            }
            else
            {
                songs[i].style.visibility = 'hidden';
            }
        }
    }

    render(props) {
        var randomInt = require('random-int');
        let songs = this.state.songs.map(song => {

            return (

                <YTIcon  title={song.title} yt={song.videoId} id={song.videoId}
                    linkTo={this.onDbClick}
                    size={this.state.loaded? this.setSize(parseInt(song.count)) : '0px' }
                    location={ this.state.loaded? 
                      {top: song.top, left: song.left, transition: 'top '+2+'s, left '+2+'s'}:
                      {top: randomInt(101,200)+'vh', left: randomInt(-50,200)+'vw'}}
                    onHover={this.onHover}
                    onLeave={this.cleanTitle}
                    count={song.count}
                />
            )
        })

        

            return (
                
                <div>
            <div> <input id="ls"  onChange={this.liveSearch} placeholder="Wyszukaj..." class="switchSearch" type="text"/></div>
            <div id="prop" class="switch" style={{ position: 'absolute', right: '5px' }} > <i class="icon-cog" />
                <div id="propField" style={{ position: 'absolute', right: '0px', top: '20px' }}  >
                    <p>Jasność ikon:</p>
                    <input type="range" id="s"
                        onChange={this.rangeHandler} />
                </div>
            </div>

                
                <Field play={this.state.ytID} show={this.state.loaded} nextSong={this.nextSongHandler} loadText={this.props.fetchData} />


                <div class="title"> {this.state.mainTitle} {this.state.ytCount} </div>


                {songs}


            </div>
        );
    }

    

    
}

export default Songs;