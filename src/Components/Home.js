import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        let profile = this.props.profiles.map(
            item => {
                console.log(item)
                let url = `show/${item.name}`
                return (
                    <Link to={url}><img key={item.name} src={item.image} ></img>
                    </Link>
                )
            }
        )

        return (
            <div>
                {profile}
            </div>
        );
    }
}

export default Home;
