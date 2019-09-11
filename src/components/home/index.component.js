import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';

import Loader from 'react-loader-spinner';
import img from '../../assets/2.jpg';
import _ from 'lodash';
import * as d3 from "d3";
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movies from '../../components/movies/index.component';
import Series from '../../components/series/index.component'


// import FooterIndex from '../../components/footer/index.component';


 class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          console.log(response.data);
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
      console.log('cheki index wewe', this.state.business.length)
      console.log('cheki index wewe lodash', _.size(this.state.business))
        return (
          <Router>
            <div className="row" style={{paddingBottom:"15%"}}>
                <div className="col-md-12">
                    <div style={{background: "#2f3236", color: "white", paddingTop: "2%", paddingBottom: "2%"}}>
                        <h2 style={{paddingLeft:"3%"}}>Popular Titles</h2>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 home" style={{display: "block"}}>
                        <div style={{paddingTop: "5%", paddingRight: "4%", display: "inline-block"}}>

                        <Link to={'/series'}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <div className="centered" style={{position: "absolute",
                                top: "30%",
                                left: "50%",
                                color: "white",
                                transform: "translate(-50%, -50%)"}}><h1>SERIES</h1></div>
                            <Card.Body>
                                <Card.Title><center style={{color: "gray"}}>Popular Series</center></Card.Title>

                            </Card.Body>
                        </Card>
                        </Link>
                        </div>

                        <div style={{paddingTop: "5%", display: "inline-block"}}>
                        <Link to={'/movies'}>
                            <Card style={{ width: '18rem', color: "gray"}}>
                                <Card.Img variant="top" src={img} />
                                <div className="centered" style={{position: "absolute",
                                    top: "30%",
                                    left: "50%",
                                    color: "white",
                                    transform: "translate(-50%, -50%)"}}><h1>MOVIES</h1></div>
                                <Card.Body>
                                    <Card.Title><center>Popular Movies</center></Card.Title>

                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Switch>
                  <Route path='/movies' component={ Movies } />
                  <Route path='/series' component={ Series } />
                </Switch>
            </div>
            
            </Router>

        );
    }
    
  }

export default Index;