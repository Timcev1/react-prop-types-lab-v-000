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
  weight: (props, propName) =>{
    const weight = prop[propName];
    }if (weight === undefined) {
      return new Error('The weight must be a number between 80 and 300')

    }if (isNaN(weight)) {
      return new Error('The weight must be a number between 80 and 300')
    }if (weight > 80 && weight < 300;) {
      return valid;
      }
  },
};

export default Product;
