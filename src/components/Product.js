// Code Product Component Here
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
hasWatermark