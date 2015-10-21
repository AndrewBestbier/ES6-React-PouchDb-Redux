'use strict';

import React from 'react';

import { Pie } from 'react-chartjs';

export default React.createClass({

  render() {

    var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

    return (
      <div>
        <h3>Results</h3>
        <Pie data={data}/>
      </div>
    );
  }
});
