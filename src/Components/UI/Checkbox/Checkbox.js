import React, { Component } from 'react';
import './Checkbox.scss';

export default class Checkbox extends Component {
    /* static propTypes = {
      hasError:this.PropTypes.bool,
      id: this.PropTypes.string.isRequired,
      indeterminate:this.PropTypes.bool,
      label:this.PropTypes.string.isRequired,
      type: this.PropTypes.oneOf(['default', 'switch']),
    }; */
    static defaultProps = {
      hasError: false,
      indeterminate: undefined,
      type: 'default',
    };
  
    componentDidMount() {
      // Apply the indeterminate attribute of the checkbox input
      this.selector.indeterminate = this.props.indeterminate;
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
        this.selector.indeterminate = this.props.indeterminate;
      }
    }
  
    render() {
      const { id, label, type, indeterminate, hasError,el, checkHandler, checked, ...inputProps } = this.props;
      const checkboxClassname = `
        m-checkbox
        ${type === 'switch' && 'm-checkbox--switch'}
        ${hasError && 'm-checkbox--has-error'}
      `;
      
      const inputClassname = `
        m-checkbox__input
        ${type === 'switch' && 'm-checkbox--switch__input'}
        ${hasError && 'm-checkbox--has-error__input'}
      `;
      
      const labelClassname = `
        m-checkbox__label
        ${type === 'switch' && 'm-checkbox--switch__label'}
      `;
      return (
        <div className={checkboxClassname}>
          <input
            onChange={(evt)=>checkHandler(evt, el)}
            type="checkbox"
            checked = {checked? true : false}
            className={inputClassname}
            ref={el => (this.selector = el)}
            id={id}
            {...inputProps}
          />
            <label className={labelClassname} htmlFor={id}>{label}</label>
        </div>
      );
    }
  }
  

  