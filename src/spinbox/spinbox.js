import React, {Component} from 'react';

class Spinbox extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>▲</button>
                <button>▼</button>
            </div>
        );
    }
}

Spinbox.defaultProps = {};
Spinbox.propTypes = {};

export default Spinbox;
