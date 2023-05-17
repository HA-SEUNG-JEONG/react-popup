import { FormEvent, useState } from "react";
import Toast from "./Toast";
import { styled } from "styled-components";

const Form = () => {
  const [showToast, setShowToast] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setShowToast(true);
    } catch (error) {
      setSubmitError(true);
    }
  };
  return (
    <FormCotainer onSubmit={handleSubmit}>
      <input type="email" />
      <input type="password" />
      <input type="submit" value="제출" />
      {showToast && <Toast show={showToast} isError={submitError} />}
    </FormCotainer>
  );
};

const FormCotainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 5px;
  position: absolute;
  inset: 0;
  margin: auto;
`;

export default Form;
