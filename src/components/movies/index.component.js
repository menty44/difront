import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';

import Loader from 'react-loader-spinner';
import _ from 'lodash';
import * as d3 from "d3";

export default class Index extends Component {

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
      d3.selectAll('.home > *').remove();
      
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