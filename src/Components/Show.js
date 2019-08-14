import React, {Component} from 'react'
// import "./Show.css"


class Show extends Component {



    render() {
        var profiles = this.props.profiles.filter((item) =>
        item.name === this.props.match.params.profiles
        )
        console.log(profiles)
        return(
            <div>
                <img src={profiles[0].image}></img>
                <h1>{profiles[0].name}</h1>
                <h1>{profiles[0].genus}</h1>
                <h1>{profiles[0].role}</h1>
                <a href={profiles[0].homepage}><input type="button" value="Read more"></input></a>

            </div>
        );
    }
}

export default Show;