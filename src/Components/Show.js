import React, {Component} from 'react';
// import "./Show.css"


class Show extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        var profile = this.props.profiles.find(profile => {
            return profile.name === this. props.match.params.name

        })
       
        return(
            <div>
                <img src={profile.image}></img>
                <h1>{profile.name}</h1>
                <p>{profile.role}</p>
                <a href={profile.homepage}><input type="button" value="Read more"></input></a>
            </div>
        );
    }
}

export default Show;