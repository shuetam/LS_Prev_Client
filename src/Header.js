
import React, { Component } from 'react';
import './Header.css';
import "./icon/css/fontello.css";
import {Link, Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import Songs from './Songs';
import Field from './Field';
var fetchData = "";

class Header extends Component {

    constructor(props) {
        super(props);

    
    this.state = {

       
        takeDataFrom: "http://localhost:5000/api/radio/allradiosongs/vox"
    }
}

    /* 1 - zet
    2 - rmf
    3 - eska
    4 - rmf maxx
    5 - antyradio
    6 - rmf classic
    40 - chillizet
    9 - zlote przeboje
    30 - vox fm
    8 - plus */


   componentDidMount() {
    console.log(this.props.match.params.id);
   }


clickCheckBox = () => {
    
    
  /*   if(this.props.match.location.pathname !== '/songs'){
        this.props.history.push('/songs');} */
    
   document.getElementById("alert").style.display='none';
    var stateCount = 0;
    

    for(var i=1;i<11;i++)
    {
        document.getElementById(i).disabled=false;
        //////here
        if(document.getElementById(i).checked)
        {
            stateCount = stateCount + 1;
            if(stateCount===3)
            {
                
                for(var i=1;i<11;i++)
                {
                    if(document.getElementById(i).checked===false) {

                        document.getElementById(i).disabled=true;
                        /////here
                    
                    }
                  
                }

               document.getElementById("alert").style.display="block";
            }
    {

            }
        }
    }


    var fetchFrom = "";
  
    for(var i=1;i<11;i++)
    {
        if(document.getElementById(i).checked)
        {
           fetchFrom = fetchFrom +  document.getElementById(i).name;
        }
        //  window.history.replaceState(null, null, "/rmf/");
        // this.props.history.push(this.state.fetch);
      //  this.setState({fetch: fetchFrom});
      
    }
    console.log('I FETCHED FROM: '+ fetchFrom);

  fetchData = "http://localhost:5000/api/radio/allradiosongs/" + fetchFrom;
    

if (fetchFrom === ""){
   fetchData = "http://localhost:5000/api/radio/allradiosongs/vox";
}
  
}


showSongs = () => {

    console.log("Fetch data when clicked:  " + fetchData);



    this.setState({takeDataFrom: fetchData})
    
   
   this.props.history.push('/songs');
    }
   







render () {

    let mainMenu = ( <div class="menu"> 
    <div id="music"  class="switch"> 
    <i class="icon-note"/>
    Muzyka 
    <div id="radio">
    <p style={{marginTop: 1, margin: 3 }}>
   <text id="infoLink">&#9432; info
   <div id="info">
   Utwory prezentowane są przez ikony - wielkość ikon uzaleniona jest od
   łącznej ilości odtworzeń utworu w wybranych stacjach radiowych.
   Początkowe ulokowanie ikon jest losowe - ich poło&#380;enie mo&#380;esz dowolnie 
   zmieniać. Aby odtworzyć dany utwór kliknij dwukrotnie na jego ikonę.<p>W jednym czasie mo&#380;a wizualizować dane z maksymalnie 3 stacji radiowych.</p>
   </div>
    </text>
    </p>
   Utwory grane w ostatnich 24h w:
<p> <label  onClick={this.clickCheckBox}>
    <input name="rmf_" type="checkbox" id="1"/> 
    Rmf 
    </label>
</p>

<p> <label  onClick={this.clickCheckBox}>
    <input name="zet_" type="checkbox" id="2"/>
    Radio Zet 
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="rmfmaxx_" type="checkbox" id="3"/> 
    Rmf Maxx
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="eska_" type="checkbox" id="4"/>
    Eska
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="plus_" type="checkbox" id="5"/>
    Radio Plus
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="vox_" type="checkbox" id="6"/>
    Vox
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="zloteprzeboje_" type="checkbox" id="7"/>
    Złote Przeboje
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="chillizet_" type="checkbox" id="8"/>
    ChilliZet
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="rmfclassic_" type="checkbox" id="9"/>
    Rmf Classic
    </label>
</p>

<p> <label  onClick={this.clickCheckBox} >
    <input name="antyradio_" type="checkbox" id="10"/>
    AntyRadio
    </label>
</p>

<p> <text id="alert">
    Wybrano maksymalną ilość stacji.
    </text>
</p>

<button onClick = {this.showSongs}>     POKAZ------>      </button>


</div>

    </div>
     
    <div class="switch"> Film  </div>
    <div class="switch"> Wydarzenia </div>
    </div>
     )
     
     


return(
    <div className="header" >
<div class="main" >LiveSearch</div> 

{mainMenu}

<Switch>

<Route path={'/songs'} component={(props) => (
  <Songs {...props} fetchData={this.state.takeDataFrom} />
)}/>

<Route path={'/:YT?'} component={(props) => (
  <Field {...props} play={this.props.match.params.id} />
)}/>

</Switch>

</div> 
) 

}

}

//// IF I WANT PASS DATA TO ROUTE WITH ID IN PATH:
{/* <Route path={'/songs:fd?'} render={(props) => (
  <Songs {...props} fetchData={this.state.takeDataFrom} /> */}

export default Header;