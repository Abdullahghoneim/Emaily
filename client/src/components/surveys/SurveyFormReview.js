import React from "react";
import { connect } from "react-redux";
import formFields from "./formFiled";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import { submitSurvey } from "../../actions/index";

function SurveyFormReview({ onCancle, formValues, submitSurvey, history }) {
  const reviewField = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label style={{ fontWeight: "bold", fontSize: "1rem" }}>
          {" "}
          {label}{" "}
        </label>
        <div style={{ fontSize: "1.4rem" }}>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5> Place Confirm Your Entries </h5>
      {reviewField}
      <button
        style={{ marginTop: "2rem" }}
        onClick={onCancle}
        className='yellow darken-3 btn-flat white-text'
      >
        {" "}
        Back{" "}
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        style={{ marginTop: "2rem" }}
        className='green btn-flat white-text right'
      >
        <i className='material-icons right'>email</i>
        Send Survey
      </button>
    </div>
  );
}

function mapStateToProps({ form: { surveyForm } }) {
  return { formValues: surveyForm.values };
}

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReview));
