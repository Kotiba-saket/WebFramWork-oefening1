import React from 'react';
import { SwatchesPicker } from 'react-color';

 export default class Component extends React.Component {

  render() {
    return <SwatchesPicker onChange={this.props.color} />;
  }
}