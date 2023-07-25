import { useEffect, useState } from "react";
import Toast from "./Toast";
import { styled } from "styled-components";

const Form = () => {
  const [showToast, setShowToast] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) =>
    password.length >= 8 && password.length <= 20;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    const hasValidataionError = !(isEmailValid && isPasswordValid);
    setSubmitError(hasValidataionError);
    setShowToast(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  const handleDeleteToast = () => {
    setShowToast(false);
    setSubmitError(false);
  };

  return (
    <FormBox>
      {showToast && <Toast isError={submitError} onClick={handleDeleteToast} />}
      <Forms onSubmit={handleSubmit}>
        <FormContainer>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <Button>Submit</Button>
        </FormContainer>
      </Forms>
    </FormBox>
  );
};

const FormBox = styled.div`
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 350px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 10rem auto;
`;

const Forms = styled.form`
  position: relative;
  input {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
  }
`;

const FormContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  margin: 1rem 0 0.5rem;
  width: 100%;
  input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
`;

const Button = styled.button`
  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  border-bottom: 1px solid black;
  font-size: 0.9rem;
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Form;
