
import React, { Component } from 'react';
import './Header.css';
import "./icon1/css/fontello.css";
import { Link, Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import Songs from './Songs';
import Field from './Field';
import First from './First';

var fetchData = "";
var opacity = 0.4;

class Header extends Component {

    constructor(props) {
        super(props);



        this.state = {

            takeDataFrom: "http://localhost:5000/api/song/allradiosongs/chillizet",
            opacity: 0.4

        }
    }



    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    Main = () => {
     //   this.props.history.push('/');
     window.location.replace("/");
    }


    clickCheckBox = () => {

        var stateCount = 0;


        for (var i = 1; i < 11; i++) {
            document.getElementById(i).disabled = false;
            //////here
            if (document.getElementById(i).checked) {
                document.getElementById(i+'a').style.color='rgba(231, 173, 64, 0.637)';
                stateCount = stateCount + 1;
                if (stateCount === 3) {

                    for (var i = 1; i < 11; i++) {
                        if (document.getElementById(i).checked === false) {

                            document.getElementById(i).disabled = true;
                            /////here

                        }

                    }

                }
                {

                }
            }
            else {
                document.getElementById(i+'a').style.color='rgba(255, 255, 255, 0.678)';
            }
        }


        var fetchFrom = "";

        for (var i = 1; i < 11; i++) {
            if (document.getElementById(i).checked) {
                fetchFrom = fetchFrom + document.getElementById(i).name;
            }


        }
        console.log('I FETCHED FROM: ' + fetchFrom);

        fetchData = "http://localhost:5000/api/song/allradiosongs/" + fetchFrom;


        if (fetchFrom === "") {
            fetchData = "http://localhost:5000/api/song/allradiosongs/vox";
        }

    }


    showSongs = () => {

        document.getElementById("s").value = 50;
        console.log("Fetch data when clicked:  " + fetchData);
        this.setState({ takeDataFrom: fetchData })
        this.props.history.push('/songs');
    }


    rangeHandler = (event) => {
        console.log(event.target.value / 100);
        console.log(document.getElementsByClassName("entity"));
        var songs = document.getElementsByClassName("entity");
        for (var i = 0; i < songs.length; i++) {
            songs[i].style.opacity = event.target.value / 100;
        }
    }



    iconsChanger = () => {
        var icons = document.getElementsByClassName("entity");
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.top = "40px";
        }
    }


    render() {

        let mainMenu = (<div class="menu">
            <div id="music" class="switch">
                <i class="icon-note" />
                Muzyka
    <div id="radio">

                    Utwory grane w ostatnich 24h w:
   <p style={{ marginTop: 1, margin: 3 }}>
                        <text id="infoLink">&#9432; info
   <div id="info">
                                Utwory prezentowane są przez ikony - wielkość ikon uzaleniona jest od
                                łącznej ilości odtworzeń utworu w wybranych stacjach radiowych.
                                Początkowe ulokowanie ikon jest losowe - ich poło&#380;enie mo&#380;esz dowolnie
                                zmieniać. Aby odtworzyć dany utwór kliknij dwukrotnie na jego ikonę.<p>W jednym czasie mo&#380;esz wizualizować dane z maksymalnie 3 stacji radiowych.</p>
                            </div>
                        </text>
                    </p>
                    <p> <label id="1a" onClick={this.clickCheckBox}>
                        <input name="rmf_" type="checkbox" id="1" />
                        Rmf
                        </label>
                    </p>

                    <p> <label id="2a" onClick={this.clickCheckBox}>
                        <input name="zet_" type="checkbox" id="2" />
                        Radio Zet
                        </label>
                    </p>

                    <p> <label id="3a" onClick={this.clickCheckBox} >
                        <input name="rmfmaxx_" type="checkbox" id="3" />
                        Rmf Maxx
                        </label>
                    </p>

                    <p> <label id="4a" onClick={this.clickCheckBox} >
                        <input name="eska_" type="checkbox" id="4" />
                        Eska
                        </label>
                    </p>

                    <p> <label id="5a" onClick={this.clickCheckBox} >
                        <input name="plus_" type="checkbox" id="5" />
                        Radio Plus
                        </label>
                    </p>

                    <p> <label id="6a" onClick={this.clickCheckBox} >
                        <input name="vox_" type="checkbox" id="6" />
                        Vox
                        </label>
                    </p>

                    <p> <label id="7a" onClick={this.clickCheckBox} >
                        <input name="zloteprzeboje_" type="checkbox" id="7" />
                        Złote Przeboje
                        </label>
                    </p>

                    <p> <label id="8a" onClick={this.clickCheckBox} >
                        <input name="chillizet_" type="checkbox" id="8" />
                        ChilliZet
                        </label>
                    </p>

                    <p> <label id="9a" onClick={this.clickCheckBox} >
                        <input name="rmfclassic_" type="checkbox" id="9" />
                        Rmf Classic
                        </label>
                    </p>

                    <p> <label id="10a" onClick={this.clickCheckBox} >
                        <input name="antyradio_" type="checkbox" id="10" />
                        AntyRadio
                        </label>
                    </p>

                    <button class="musicButtton" onClick={this.showSongs}>POKA<span style={{ fontSize: 14 }}>&#380;</span> UTWORY</button>


                </div>

            </div>

            <div class="switch" onClick={this.iconsChanger}> Film   </div>
            <div class="switch"> Wydarzenia </div>
            <div id="prop" class="switch" style={{ marginRight: '10px', marginLeft: 'auto' }} > <i class="icon-cog" />

                <div id="propField" >
                    <p>Jasność ikon:</p>
                    <input type="range" id="s"
                        onChange={this.rangeHandler} />
                </div>
            </div>
        </div>
        )


        return (
            <div className="header" >
                <div class="main" onClick={this.Main} >Live<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>S</span>earch</div>

                {mainMenu}
                {this.opacity}

                <Switch>

                    <Route path={'/'} exact component={First} />
                    )}/>
                    
                    <Route path={'/songs'} component={(props) => (
                        <Songs {...props} fetchData={this.state.takeDataFrom} />
                    )} />

{/*                     <Route path={'/youtubeid/:YT?'} exact component={(props) => (
                        <Field {...props} play={this.props.match.params.id} />
                    )} /> */}

                </Switch>

            </div>
        )

    }

}

//// IF I WANT PASS DATA TO ROUTE WITH ID IN PATH:
{/* <Route path={'/songs:fd?'} render={(props) => (
  <Songs {...props} fetchData={this.state.takeDataFrom} /> */}

export default Header;