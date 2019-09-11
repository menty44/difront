import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';

import Loader from 'react-loader-spinner';
import _ from 'lodash';
import * as d3 from "d3";
import {Card} from "react-bootstrap";
import img from "../../assets/2.jpg";

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          loading: "Loading ...",
          error: "Oops, something went wrong ..."
      };
    }
    componentDidMount(){
      axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response => {
          console.log(response.data);
          this.setState({ movies: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
    render() {
      console.log('cheki index wewe lodash', _.size(this.state.movies.entries))
      d3.selectAll('.home > *').remove();

        if(_.size(this.state.movies) > 0) {
            return this.state.movies.entries.map(el => (
                // _.forEach(this.state.movies.entries, function(x){

                    <div className="row" style={{paddingRight: "4%", paddingLeft: "8%"}}>
                        <div style={{paddingTop: "5%", paddingRight: "4%", display: "inline-block"}}>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src={el.images["Poster Art"].url} />
                                <div className="centered" style={{position: "absolute",
                                    top: "30%",
                                    left: "50%",
                                    color: "white",
                                    transform: "translate(-50%, -50%)"}}><h1>{el.programType}</h1></div>
                                <Card.Body>
                                    <Card.Title>
                                        <center style={{color: "gray"}}>
                                            {el.title}
                                        </center>
                                    </Card.Title>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                // })

            ));
        }else {
            return (
                    <div className="col-md-12" style={{textAlign: "center", paddingTop: "10%", color: "gray"}}>
                        <h2>{this.state.loading}</h2>
                    </div>
            );
        }
      
      
    }
    
  }