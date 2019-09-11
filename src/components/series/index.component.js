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
            series: [],
            loading: "Loading ...",
            error: "Oops, something went wrong ..."
        };
    }
    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then(response => {
                console.log(response.data);
                this.setState({ series: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log('cheki index wewe lodash', _.size(this.state.series.entries))
        d3.selectAll('.home > *').remove();
        d3.selectAll('.head > *').remove();

        d3.selectAll('.head')
            .append('h2')
            .style('padding-left', '3%')
            .text('Popular Series')


        if(_.size(this.state.series.entries) > 0) {

            let movies = _.filter(this.state.series.entries, { 'programType' : 'series'}),
                newArray = [];

            movies.forEach(function(x){
                if(x.releaseYear >= 2010)
                {
                    newArray.push(x);
                }
            });
            console.log(newArray);


            let reduceArray = _.slice(newArray, 0, 21),
                field = 'title',
                finalArray = reduceArray.sort();
            reduceArray.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));

            return finalArray.map(el => (

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
                                        {el.title} | {el.releaseYear}
                                    </center>
                                </Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                </div>

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