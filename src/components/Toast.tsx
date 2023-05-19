import styled, { keyframes } from "styled-components";

interface ErrorProps {
  isError: boolean;
}

const Toast = ({ isError }: ErrorProps) => {
  return (
    <Notification $error={isError}>
      <p>{isError ? "Fail" : "Success"}</p>
      <Progress></Progress>
    </Notification>
  );
};

const FadeIn = keyframes`
  from{
    opacity:1;
    visibility:visible;
    transform:translateY(0);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
`;

const Load = keyframes`
  to{
    transform: scaleX(1);
  }
`;

const Notification = styled.section<{ $error: boolean }>`
  position: absolute;
  top: 1.25rem;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 3rem;
  margin-left: -9rem;
  padding: 0 0.3rem;
  border-radius: 4px;
  background-color: #141619;
  color: #f6f5f9;
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: ${FadeIn} 4s linear forwards;
  p {
    font-size: 20px;
    font-weight: 900;
  }
  background-color: ${({ $error }) => ($error ? "#E74C3C" : "rgb(7, 188, 12)")};
`;

const Progress = styled.span`
  position: absolute;
  left: 0.3rem;
  bottom: 0.3rem;
  width: calc(100% - 10px);
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  background-image: linear-gradient(to right, #539bdb, #3250bf);
  border-radius: inherit;
  animation: ${Load} 4s 0.25s linear forwards;
`;

export default Toast;
