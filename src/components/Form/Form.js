import React, { useState } from 'react';
import './Form.css';

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue)
      } else {
        setQuestion(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
    console.log("question logged and email saved")

     
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setQuestion('');
      setEmail('');
    };
  
    return (
      <div>
        <form className="form">
          <input
            value={question}
            name="question"
            onChange={handleInputChange}
            type="text"
            placeholder="Ask me a question..."
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Enter your email address"
          />

          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>

      </div>
    );
  }
  
  export default Form;
  