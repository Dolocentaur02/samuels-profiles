import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import Show from "./Components/Show"
import Create from './Components/Create'
// import Update from './Components/Update'
// import Delete from './Components/Delete'



import './App.css';

// this profile is birds in other instances nah mean

class App extends Component {
  constructor() {
    super()
    this.state = {
      profiles: [

        {
          "_id": "5a0fa4daae5bc100213c232e",
          "name": "Hannah Abbott",
          "role": "student",
          "house": "Hufflepuff",
          "school": "Hogwarts School of Witchcraft and Wizardry",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": true,
          "deathEater": false,
          "bloodStatus": "half-blood",
          "species": "human",
          "image": "https://vignette.wikia.nocookie.net/harrypotter/images/5/52/Katiebellinfobox.jpg/revision/latest?cb=20170118053940",
          "homepage": "https://harrypotter.fandom.com/wiki/Hannah_Abbott"
        },
        {
          "_id": "5a0fa54aae5bc100213c232f",
          "name": "Bathsheda Babbling",
          "role": "Professor, Ancient Runes",
          "school": "Hogwarts School of Witchcraft and Wizardry",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": true,
          "deathEater": false,
          "bloodStatus": "unknown",
          "species": "human",
          "image": "https://vignette.wikia.nocookie.net/harrypotter/images/7/7c/Bagshot_profile.jpg/revision/latest?cb=20161119223158",
          "homepage": "https://harrypotter.fandom.com/wiki/Bathsheda_Babbling"

        },
        {
          "_id": "5a0fa5deae5bc100213c2330",
          "name": "Ludo Bagman",
          "role": "Head, Department of Magical Games and Sports",
          "__v": 0,
          "ministryOfMagic": true,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": false,
          "deathEater": false,
          "bloodStatus": "unknown",
          "species": "human",
          "image": "https://vignette.wikia.nocookie.net/harrypotter/images/7/71/LudoBagman.png/revision/latest?cb=20180205035926",
          "homepage": "https://harrypotter.fandom.com/wiki/Ludovic_Bagman"

        },
        {
          "_id": "5a0fa60aae5bc100213c2331",
          "name": "Bathilda Bagshot",
          "role": "Author, A History Of Magic",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": false,
          "deathEater": false,
          "bloodStatus": "unknown",
          "species": "human",
          "image": "https://vignette.wikia.nocookie.net/harrypotter/images/2/21/ProfessorFemale.jpg/revision/latest?cb=20100824181133",
          "homepage": "https://harrypotter.fandom.com/wiki/Bathilda_Bagshot"

        },
        {
          "_id": "5a0fa648ae5bc100213c2332",
          "name": "Katie Bell",
          "role": "student",
          "house": "Gryffindor",
          "school": "Hogwarts School of Witchcraft and Wizardry",
          "boggart": "Lord Voldemort",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": false,
          "deathEater": false,
          "bloodStatus": "pure-blood",
          "species": "human",
          "image": "https://vignette.wikia.nocookie.net/harrypotter/images/b/b7/Harry-potter-goblet-of-fire-hannah.jpg/revision/latest?cb=20170731215859",
          "homepage": "https://harrypotter.fandom.com/wiki/Katie_Bell"

        }

      ]
    }

  }

  render() {
    return (
      <div>
        <nav>
        <h1>Harry Porter Profiles</h1>
        <div className="title"></div>
        <span>                   </span>
        <Link to="/">Home</Link>
        <span>                    </span>
        <Link to="/show/:name" >Show</Link>
        <span>  </span>
        <Link to="/create/:name" >Create Profile</Link>
        <span>                     </span>
        <Link to="/show/:name" >Update Profile</Link>
        <span>                     </span>
        <Link to="/show/:name" >Delete Profile</Link>
        <Route exact path="/" render={routerProps => (<Home {...this.state} {...routerProps} />)} />
        <Route path="/show/:name" render={routerProps => (<Show {...this.state}  {...routerProps} />)} />
        <Route path="/create/:name" exact render={routerProps => (<Create {...this.state}  {...routerProps} />)} />
        </nav>
      </div >
    );
  }
}

export default App;
