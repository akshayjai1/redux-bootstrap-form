import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import { store } from "./CreateStore";
import "./styles.css";
import SyncValidationForm from "./Form/SyncValidationForm";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Container></Container>
        <span>Form</span>
        <SyncValidationForm />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
