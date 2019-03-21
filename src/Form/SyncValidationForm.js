import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./Validate";
import warn from "./Warning";
import FieldInput from "./FieldInput";
import { Form, Button } from "react-bootstrap";

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit} >
      <Field
        name="Vessel_Name"
        type="text"
        component={FieldInput}
        label="Vessel Name"
      />
      <Field
        name="IMO_Number"
        type="number"
        component={FieldInput}
        label="IMO Number"
      />
      <Field
        name="Vessel_Type"
        type="number"
        component={FieldInput}
        label="Vessel Type"
      />
      <Field
        name="DWT_Range_From"
        type="date"
        component={FieldInput}
        label="DWT Range From"
      />
      <Field
        name="DWT_Range_To"
        type="date"
        component={FieldInput}
        label="DWT Range To"
      />
      <Button type="submit" disabled={submitting}>
        Search
      </Button>
      <Button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(SyncValidationForm);
