import styled, { css, keyframes } from "styled-components";

const Toast = ({ show, isError }: { show: boolean; isError: boolean }) => {
  return (
    <Notification show={show} isError={isError}>
      <p>hi</p>
      <Progress></Progress>
    </Notification>
  );
};

const FadeIn = keyframes`
  10%{
    opacity:1;
    visibility:visible;
    transform:translateY(0);
  }
  90%{
    opacity:1;
    transform:translateY(0);
  }
`;

const Load = keyframes`
  to{
    transform: scaleX(1);
  }
`;

const Notification = styled.section<{ show: boolean; isError: boolean }>`
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
  width: 30%;
  padding: 5px 5px;
  border-radius: 4px;
  background-color: #141619;
  color: #f6f5f9;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: ${FadeIn} 4s linear forwards;
  ${(show) =>
    show &&
    css`
      background-color: green;
    `};

  p {
    font-size: 20px;
    font-weight: 900;
  }
`;

const Progress = styled.span`
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: calc(100% - 10px);
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  background-image: linear-gradient(to right, #539bdb, #3250bf);
  border-radius: inherit;
  animation: ${Load} 3s 0.25s linear forwards;
`;

export default Toast;
