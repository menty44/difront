import React, { Component } from 'react';

class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="head" style={{background: "#2f3236", color: "white", paddingTop: "2%", paddingBottom: "2%"}}>
                <h2 style={{paddingLeft:"3%"}}>Popular Titles</h2>
            </div>
        )
    }
}

export default Index;