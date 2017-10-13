// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}
Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};