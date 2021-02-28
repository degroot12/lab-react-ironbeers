import axios from 'axios'
import React, {Component} from 'react'
import Header from './Header'

class BeerDetails extends Component{

    state = {
        beer: {}
    }

    componentDidMount(){
        let beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                this.setState({
                    beer: response.data
                })
            })
            .catch((err) => {
                console.log('fetching beer details failed', err)
            })
    }


    render(){
        const{image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by}= this.state.beer
        return(
            <div>
           
            <Header />
            <h1>Beer details</h1>
            <div className='details'>

            
            <div className='beer-c'>
            <div className='beer-img'>
                <img src={image_url} /> 
            </div>
                
                <div>
                <h2>{name}</h2>
                <h4>{tagline}</h4>
                <h5>{first_brewed}</h5>
                <h3>{attenuation_level}</h3>
                <p>{description}</p>
                <h6>{contributed_by}</h6>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default BeerDetails