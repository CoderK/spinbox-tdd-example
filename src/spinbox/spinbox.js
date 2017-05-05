import React, {Component} from 'react';

class Spinbox extends Component {
    componentWillMount() {
        this.state = {
            value: 200
        };
        this.handleClickIncrease = this.handleClickIncrease.bind(this);
        this.handleClickDecrease = this.handleClickDecrease.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    render() {
        return (
            <div>
                <input data-role="value"
                       type="text"
                       value={ this.state.value }
                       onChange={ this.handleChangeInput } />
                <button data-role="increase"
                        onClick={ this.handleClickIncrease }>▲</button>
                <button data-role="decrease"
                        onClick={ this.handleClickDecrease }>▼</button>
            </div>
        );
    }

    handleChangeInput(e) {
        this.setState({
            value: Number(e.target.value)
        });
    }

    handleClickIncrease() {
        this.setState({
            value: this.state.value + 1
        });
    }

    handleClickDecrease() {
        this.setState({
            value: this.state.value - 1
        });
    }
}

Spinbox.defaultProps = {};
Spinbox.propTypes = {};

export default Spinbox;
