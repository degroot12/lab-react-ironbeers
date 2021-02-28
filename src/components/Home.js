import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <Link to="/beers">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="../assets/beers.png" />
            <Card.Body>
              <Card.Title>All Beers</Card.Title>
              <Card.Text>
                This is some text to go to all beers
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/beers/random">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="../assets/beers.png" />
            <Card.Body>
              <Card.Title>Random Beer</Card.Title>
              <Card.Text>
                This is some text to go to a random beer
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/new-beer">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="../assets/beers.png" />
            <Card.Body>
              <Card.Title>New Beer</Card.Title>
              <Card.Text>
                This is some text to create a new beer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Home;
