import React from "react";
import './SignIn.css';

const SignIn = ({ onSignInChange, onSignInSubmit }) => {
  return (
    <div>
      <div className="form">
        <label htmlFor="name">Name</label>
        <input type="text" onChange={onSignInChange} id="name" name="name"></input>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={onSignInChange} id="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={onSignInChange} id="password" name="password"></input>
        <button onClick={onSignInSubmit} type="submit" id="submit" name="submit">Submit</button>
      </div>
    </div>
  )
}

export default SignIn;
