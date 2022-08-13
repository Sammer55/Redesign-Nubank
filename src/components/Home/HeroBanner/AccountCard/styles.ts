import styled from "styled-components";

export const Wrapper = styled.div`
  right: 0px;
  top: 200px;
  padding: 60px 24px;
  position: relative;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  max-width: 100%;

  @media (min-width: 800px) {
    max-width: 323px;
    position: absolute;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #39005f;
`;

export const Input = styled.input`
  background-color: transparent;
  border-width: 0 0 1px 0;
  border-color: #989799;
  height: 48px;
  width: 100%;
  max-width: 191.96px;
  outline: none;
  margin-bottom: 34px;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #820ad1, #39005f);
  width: 100%;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.05em;
  color: #e9c7ff;
`;
