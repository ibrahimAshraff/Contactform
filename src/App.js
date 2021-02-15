import React, {useState} from "react";
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email:""
  });

  const [submitted, setSubmitted] = useState(false) ;
  const [valid, setValid] = useState(false);


const handleFirstName = (event) => {
  setValues({...values, firstName:event.target.value})
}

const handleLastName = (event) => {
  setValues({...values, lastName: event.target.value})
}

const handleEmail = (event) => {
  setValues({...values, email: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  if(values.firstName && values.lastName && values.email){
    setValid(true);
  }
  setSubmitted(true);
}

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid? <div className="success-message"> Success!</div> :null}
        <input
        onChange={handleFirstName}
          id="firstName"
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ?  <span>please enter a first name</span> :null}
       
        <input
          value={values.lastName}
          onChange={handleLastName}
          id="lastName"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ?  <span>please enter a last name</span> :null}

        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email Address"
          name="email"          
        />
        {submitted && !values.email ?  <span>please enter an email address</span> :null}

        <button className="form-field" type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default App;
