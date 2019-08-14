import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        return (
            <div>
                {this.props.profiles.map((profile, index) => {
                    return (
                        <Link to="/show/:name" >
                            <img key={index} src={profile.image} ></img>
                        </Link>

                    )

                })}
            </div>

        )
    }


}

export default Home;
