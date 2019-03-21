import React from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
  FormLabel
} from "react-bootstrap";

const FieldInput = ({
  input,
  label,
  type,
  name,
  placeholder,
  min,
  max,
  meta: { touched, error, warning }
}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        name={name}
        controlId={name}
        type={type}
        placeholder={label}
        min={min}
        max={max}
        {...input}
        value={input.value}
        onChange={input.onChange}
      />

      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Form.Group>
  );
};
export default FieldInput;
