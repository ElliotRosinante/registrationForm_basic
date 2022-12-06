import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleAllValueChanges = (event) => {
    //we are destructuring name and value from the event.target object
    const { name, value } = event.target;
    setValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    /* We want the success message to only appear when every input field in the form is valid
      if even a single input field is invalid. (i.e it is a falsy value, setSubmitted won't be set to true)
    */
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  //as a challenge, if the form is submitted and all input fields are valid
  //I want to disable all input fields including the submit button too :)
  return (
    <div className="App">
      <div className="form-container">
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank You for Registering
          </div>
        ) : null}
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className="form-field"
            id="firstname"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleAllValueChanges}
            disabled={submitted && valid ? true : false}
          />
          {submitted && !valid ? <span>Please enter a firstname</span> : null}
          {/* if the form is submitted and the value of firstname is a falsy value
          display the span*/}
          <input
            className="form-field"
            id="lastname"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleAllValueChanges}
            disabled={submitted && valid ? true : false}
          />
          {submitted && !valid ? <span>Please enter a lastname</span> : null}
          {/* if the form is submitted and the value of lastname is a falsy value
          display the span */}
          <input
            id="email"
            className="form-field"
            placeholder="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleAllValueChanges}
            disabled={submitted && valid ? true : false}
          />
          {submitted && !valid ? (
            <span>Please enter a valid email address</span>
          ) : null}
          {/*  if the form is submitted and the value of email is a falsy value
          display the span*/}
          <button
            className="form-field"
            type="submit"
            disabled={submitted && valid ? true : false}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

//this is a very small mini project where we learn about
//form handling in react.

//on form submit, we want to disable all input fields while showing the success message
//on successful form submit

//this way even if one input field is wrong, all the error messages will get displayed
