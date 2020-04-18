import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DateField extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div class="form-group">
                        <input type={this.props.type} name={this.props.name}
                        value={this.props.value} onChange={this.props.onChange}></input>
                    </div>
            </div>
        )
    }
}

DateField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
     value: PropTypes.instanceOf(Date).isRequired,
     type: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired
  };


export default DateField; 
