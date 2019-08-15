import React, { Component } from 'react'
import "./Create.css"

class Create extends Component {
    constructor() {
        super()
        this.state = {
            name: " ",
            orderOfThePhoenix: " ",
            bloodStatus: " ",
            species: " ",
            image: " ",
            homePage: " "

        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeOrder = (e) => {
        this.setState({
            OrderOfThePhoenix: e.target.value
        });
    }

    onChangeBlood = (e) => {
        this.setState({
            bloodStatus: e.target.value
        });
    }

    onChangeSpecies = (e) => {
        this.setState({
            species: e.target.value
        });
    }

    onChangeImage = (e) => {
        this.setState({
            image: e.target.value
        });
    }

    onChangePage = (e) => {
        this.setState({
            homePage: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const formObjective = {

            name: this.state.name,
            orderOfThePhoenix: this.state.OrderOfThePhoenix,
            bloodStatus: this.state.bloodStatus,
            species: this.state.species,
            image: this.state.image,
            homePage: this.state.homePage
        }
    }

    render() {
        return (
            <div>
                <h2>Add New Profile</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="createForm" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>orderOfThePhoenix</label>
                        <input type="text" className="createForm" value={this.state.orderOfThePhoenix} onChange={this.onChangeOrder} />
                    </div>
                    <div className="form-group">
                        <label>Blood Status</label>
                        <input type="text" className="createForm" value={this.state.bloodStatus} onChange={this.onChangeBlood} />
                    </div>
                    <div className="form-group">
                        <label>Species</label>
                        <input type="text" className="createForm" value={this.state.species} onChange={this.onChangeSpecies} />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="text" className="createForm" value={this.state.image} onChange={this.onChangeImage} />
                    </div>
                    <div className="form-group">
                        <label>HomePage</label>
                        <input type="text" className="createForm" value={this.state.homePage} onChange={this.onChangePage} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" New Profile" className=" btn"/>
                    </div>
                </form>
            </div>

        )
    }


}

export default Create;