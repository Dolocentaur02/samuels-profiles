import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

class Home extends Component {

    render() {

        return (
            <div className="picContainer">
                {this.props.profiles.map((profile, index) => {
                    return (
                        <Link key = {index} to={`/show/${profile._id}`} >
                            <img key={index} src={profile.image} ></img>
                        </Link>

                    )

                })}
            </div>

        )
    }


}

export default Home;
