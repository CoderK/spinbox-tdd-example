import React from 'react';

class Spinbox extends React.Component {
  componentWillMount() {
    this.state = {
      value: 200
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text"
               value={ this.state.value }
               onChange={ this.handleChangeInput } />
        <button data-name="increment"
                onClick={ this.handleClickIncrement }>▲</button>
        <button data-name="decrement"
                onClick={ this.handleClickDecrement }>▼</button>
      </div>
    );
  }

  handleClickDecrement() {
    this.setState({
      value: this.state.value - 1
    });
  }

  handleClickIncrement() {
    this.setState({
      value: this.state.value + 1
    });
  }

  handleChangeInput(e) {
    this.setState({
      value: e.target.value
    });
  }
}

Spinbox.defaultProps = {};
Spinbox.propTypes = {};

export default Spinbox;
