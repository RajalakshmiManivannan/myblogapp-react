import React, { Component } from 'react'
import PropTypes from "prop-types";

class TextFieldGroup extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div class="form-group">
                        <input type={this.props.type} 
                            placeholder={this.props.placeholder} 
                            name={this.props.name}value={this.props.value} onChange={this.props.onChange}>
                        </input>
                   </div>
            </div>
        )
    }
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

export default TextFieldGroup;
