import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';

import Loader from 'react-loader-spinner';
import _ from 'lodash';
import fb_blue from '../../assets/fb-white.svg';
import tw_blue from '../../assets/twit_white.svg';
import in_blue from '../../assets/inst_white.svg';

import apple from '../../assets/apple.svg';
import droid from '../../assets/droid.svg';
import win from '../../assets/windows.svg';

export default class FooterIndex extends Component {

  constructor(props) {
      super(props);
    }
    componentDidMount(){
    }

    render(){
        return (
          <div style={{background: "black", color: "white", paddingTop: "3%", paddingBottom: "3%"}}>
            <div style={{display: "inline", paddingRight: "10%", paddingLeft: "10%", textAlign: "justified"}}>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>Home</div>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>|</div>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>Terms and Conditions</div>
             
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>|</div>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>Privacy Policy</div>
             
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>|</div>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>Collection Statement</div>
             
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>|</div>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>Help</div>

              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>|</div>
              <div style={{display: "inline-block", paddingRight: "1%", paddingLeft: "1%"}}>Manage Account</div>
  
            </div>
            <p></p>
            <small style={{paddingLeft: "11%", color: "gray"}}>Copyright © 2019 Demo Streaming. All Right Reserved.</small>
              <p></p>
              <div style={{paddingLeft: "11%", paddingTop: "2%"}}>
                
              <img src={fb_blue} style={{height: "30px", paddingRight: "1%", paddingLeft: "1%"}}></img>
              <img src={tw_blue} style={{height: "30px", paddingRight: "1%", paddingLeft: "1%"}}></img>
              <img src={in_blue } style={{height: "30px", paddingRight: "1%", paddingLeft: "1%"}}></img>

              <img src={apple} style={{height: "30px", paddingRight: "1%", paddingLeft: "1%", float: "right"}}></img>
              <img src={droid} style={{height: "30px", paddingRight: "1%", paddingLeft: "1%", float: "right"}}></img>
              <img src={win} style={{height: "30px", paddingRight: "1%", paddingLeft: "1%", float: "right"}}></img>


              </div>
              <div style={{}}>
              </div>

          </div>
        );

    }
    
  }