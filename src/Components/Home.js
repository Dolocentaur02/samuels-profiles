import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        let list = this.props.profiles.map(
            item => {
                console.log(item)
                return (
                    <Link to={"/show" + item.name} ><img key={item.name} src={item.image} ></img>
                    </Link>
                )
            }
        )

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Home;
