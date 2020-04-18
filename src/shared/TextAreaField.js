import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextAreaField extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
               <div class="form-group">
                        <textarea placeholder={this.props.placeholder}
                        name={this.props.name} value={this.props.value} onChange={this.props.onChange}></textarea>
                   </div> 
            </div>
        )
    }
}


TextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};


export default TextAreaField;

