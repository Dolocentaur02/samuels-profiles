import React, {Component} from 'react';
// import "./Show.css"
import axios from 'axios'


class Show extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }

    }
    componentDidMount() {
        let url = this.props.match.params.name
        console.log(url)
        axios.get(`http://localhost:4000/profile/${url}`)
            .then( res => {this.setState({data:[res.data]})
            console.log(res.data)})

    }

    render() {

        var profile = this.state.data.map( profile => {
            return(
                <div>
                <img src={profile.image}></img>
                <h1>{profile.name}</h1>
                <p>{profile.role}</p>
                </div>
            )
              
            })
          
       
        return(
            <div>
                {profile}
                <a href={profile.homepage}><input type="button" value="Read more"></input></a>
            </div>
        );
    }
}

export default Show;