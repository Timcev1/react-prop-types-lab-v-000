// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div>Product</div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: function(props, propName) {
    var weight = props[propName];
    if (weight === undefined) {
      return new Error("Weight must be a number and between 80 and 300")
    }
    else if (isNaN(weight)) {
      return new Error("Weight must be a number and between 80 and 300")
    } else if (!(weight >= 80 && weight <= 300)) {
      return new Error("Weight must be a number and between 80 and 300")
    }
  }
}

export default Product;
