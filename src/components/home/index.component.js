import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';

import Loader from 'react-loader-spinner';
import img from '../../assets/2.jpg';
import _ from 'lodash';
import { Card } from 'react-bootstrap';


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
            <div className="row">
                <div className="col-md-12">
                    <div style={{background: "#2f3236", color: "white", paddingTop: "2%", paddingBottom: "2%"}}>
                        <h2 style={{paddingLeft:"3%"}}>Popular Titles</h2>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-8" style={{display: "block"}}>
                        <div style={{paddingTop: "5%", paddingRight: "4%", display: "inline-block"}}>

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
                        </div>

                        <div style={{paddingTop: "5%", display: "inline-block"}}>
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
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
      // if(_.size(this.state.business) > 0){
      //   return (
      //     <div>
      //       <h3 align="center">Business List</h3>
      //       <table className="table table-striped" style={{ marginTop: 20 }}>
      //         <thead>
      //           <tr>
      //             <th>Person</th>
      //             <th>Business</th>
      //             <th>GST Number</th>
      //             <th colSpan="2">Action</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           { this.tabRow() }
      //         </tbody>
      //       </table>
      //     </div>
      //   );
      // }else{
      //   return (
      //     <div className="row">
      //         <div className="col-md-12">
      //             <div style={{background: "#2f3236", color: "white", paddingTop: "2%", paddingBottom: "2%"}}>
      //                 <h2 style={{paddingLeft:"3%"}}>Popular Titles</h2>
      //             </div>
      //         </div>
      //         <div className="col-md-5"></div>
      //         <div className="col-md-2" style={{ paddingTop: "5%"}}>
      //         <span style={{float: 'centre'}}>
      //           <Loader
      //             type="Oval"
      //             color="#00BFFF"
      //             height="100"
      //             width="100"
      //           />
      //           </span></div>
      //         <div className="col-md-5"></div>
      //     </div>
      //
      //     );
      // }
      
    }
    
  }

export default Index;