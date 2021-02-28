import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import {Link} from 'react-router-dom';

class All extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        console.log('error while fetching', err);
      });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <Header />
        <div className='all-beers'>
        {beers.map((beer, index) => {
          return (
            <Link to={{pathname:`/beers/${beer._id}`, beer:{beer}}}>
              <div className="beer-card" key={index}>
                <img src={beer.image_url} />
                <div className="beer-info">
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline}</h4>
                  <h6>{beer.contributed_by}</h6>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    );
  }
}

export default All;
