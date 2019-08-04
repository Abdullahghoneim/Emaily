import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import SurveyFiled from "./SurveyField";
import _ from "lodash";
import validateEmails from "../../util/validateEmails";
import formFileds from "./formFiled";

class SurveyForm extends Component {
  renderField() {
    return _.map(formFileds, ({ name, label }) => {
      return (
        <Field
          key={name}
          component={SurveyFiled}
          type='text'
          name={name}
          label={label}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div>Create New Survey</div>
        <form
          style={{ marginTop: "1rem" }}
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderField()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button className='teal btn-flat right white-text' type='submit'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.forEach(formFileds, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You Must Provide A value";
    }
  });

  return errors;
};

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false
})(SurveyForm);
