import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

class New extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
      };

    handleSubmit = (event) => {
        event.preventDefault()
        let newBeer = {
            name: event.target.name.value,
            tagline: event.target.tagline.value,
            description: event.target.description.value,
            first_brewed: event.target.first_brewed.value,
            brewers_tips: event.target.brewers_tips.value,
            attenuation_level: event.target.attenuation_level.value,
            contributed_by: event.target.contributed_by.value,
        }

        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
            .then((response) => {
                console.log(response)
                this.props.history.push('/beers')
            })
            .catch((err) => {
                console.log('error while creating new beer', err)
            })
    }

    render() {
        return (
            <div>
                <Header />
            <div className="mt-5 text-left w-100 d-flex justify-content-center">
                
                <form onSubmit={this.handleSubmit} className="col-6">
                    <label>Name</label>
                    <input name='name' type='text' className="form-control" />
                    <label>Tagline</label>
                    <input name='tagline' type='text'className="form-control"/>
                    <label>Description</label>
                    <input name='description' type='text'className="form-control"/>
                    <label>First Brewed</label>
                    <input name='first_brewed' type='text'className="form-control"/>
                    <label>Brewer Tips</label>
                    <input name='brewers_tips' type='text'className="form-control"/>
                    <label>Attenuation Level</label>
                    <input name='attenuation_level' type='number'className="form-control"/>
                    <label>Contributed By</label>
                    <input name='contributed_by' type='text'className="form-control"/>
                    <button type='submit' className="btn btn-primary">ADD NEW</button>
                </form>
            </div>
            </div>
        )
    }
}

export default New