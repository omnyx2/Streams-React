import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
  renderError = ({error, touched}) => {
    if (error && touched) {
      return (
        <div className="ui negative message">
          <i className="close icon"></i>
          <div className="header">Error!</div>
          <p> {error} </p>
        </div>
      );
    }
    return;
  };

  renderInput = ({input, label, meta}) => {
    const className = `field ${label}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValue => {
    this.props.onSubmit(formValue);
  };

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="field">
			<Field 
				name="title" 
				component={this.renderInput} 
				label="Title" 
			/>
        </div>
        <div className="field">
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
          />
        </div>
        <button className="ui violet button">
          <i className="middle envelope outline icon" />
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'youmust enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
