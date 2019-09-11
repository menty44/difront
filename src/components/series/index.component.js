import React, { Component } from 'react';
import axios from 'axios';

import Loader from 'react-loader-spinner';
import _ from 'lodash';
import * as d3 from "d3";
import { Card } from 'react-bootstrap';
import img from "../../assets/2.jpg";


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {series: []};
    }
    componentDidMount(){
      axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response => {
          console.log(response.data);
          this.setState({ series: response.data.entries });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    

    render() {
      d3.selectAll('.home > *').remove();
        if(_.size(this.state.series) > 0) {
            return (
            <div className="row" style={{}}>
                <div style={{paddingTop: "5%", paddingRight: "4%", display: "inline-block"}}>
                    <Card style={{ width: '18rem'}}>
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
                </div>
            </div>
            );
        }else {
            return (
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
              <span style={{float: 'centre'}}>
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
                </span></div>
                    <div className="col-md-5"></div>
                </div>
            );
        }
      }
      
    
  }