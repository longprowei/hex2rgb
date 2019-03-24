import React, { Component } from 'react';
import './App.css';

function ColorFromGroup(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        value={props.value}
        id={props.id}
        type="text"
        name={props.id}
        className="form-control"
        onChange={props.onChange}
      />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      isHex: true
    }
    this.handleHexChange = this.handleHexChange.bind(this);
    this.handleRgbChange = this.handleRgbChange.bind(this);
  }

  handleHexChange(e) {
    this.setState({
      color: e.target.value,
      isHex: true,
    })
  }

  handleRgbChange(e) {
    this.setState({
      color: e.target.value,
      isHex: false,
    })
  }

  convertToRgb(hex) {
    hex = hex.trim();

    if (hex.length !== 3 &&
        hex.length !== 4 &&
        hex.length !== 6 &&
        hex.length !== 7) {
      return '';
    } else if ((hex.length === 4 || hex.length === 7) && hex[0] !== '#' ) {
      return '';
    } else if (hex.length === 4 || hex.length === 7) {
      hex = hex.substr(1);
    }

    if (Number.isNaN(Number.parseInt(hex, 16)) || hex.indexOf('#') !== -1) {
      return '';
    }

    let r, g, b;
    if (hex.length === 6) {
      r = Number.parseInt(hex.substr(0, 2), 16);
      g = Number.parseInt(hex.substr(2, 2), 16);
      b = Number.parseInt(hex.substr(4, 2), 16);
    } else if (hex.length === 3) {
      r = Number.parseInt(hex.substr(0, 1), 16);
      g = Number.parseInt(hex.substr(1, 1), 16);
      b = Number.parseInt(hex.substr(2, 1), 16);
    }

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  convertToHex(rgb) {
    rgb = rgb.trim();
    let re = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    let result = rgb.match(re);
    if (!result) {
      return '';
    }

    let r = Number.parseInt(result[1]),
        g = Number.parseInt(result[2]),
        b = Number.parseInt(result[3]);

    if (r > 255 || g > 255 || b > 255) {
      return '';
    }

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    // if any value's length equals 2, then converting all value to 2 digits
    if (r.length === 2 || g.length === 2 || b.length === 2) {
      if (r.length === 1) {
        r = '0' + r;
      }

      if (g.length === 1) {
        g = '0' + g;
      }

      if (b.length === 1) {
        b = '0' + b;
      }
    }

    return '#' + r + g + b;
  }

  render() {
    const color = this.state.color;
    const isHex = this.state.isHex;

    let hex, rgb;
    hex = isHex ? color : this.convertToHex(color);
    rgb = isHex ? this.convertToRgb(hex) : color;

    return (
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center input-container">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <ColorFromGroup value={hex} id="hex-color" label="HEX" onChange={this.handleHexChange}/>
            <ColorFromGroup value={rgb} id="rgb-color" label="RGB" onChange={this.handleRgbChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
