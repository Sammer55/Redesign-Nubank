import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f9f3ff;
  background-image: url("/hero-bg.png");
  background-repeat: no-repeat, repeat;
  background-position: flex-end;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: calc(100vh - 80px);

  @media (max-width: 860px) {
    height: 100vh;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 40px 0 60px 120px;
  display: flex;
  transition: 0.5s ease;
  position: relative;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    padding: 60px 20px 60px 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #232125;
  max-width: 320px;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #4d5766;
  max-width: 420px;
`;

export const CreditCards = styled.img`
  width: 557.39px;
  height: 541.69px;
  display: flex;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Card = styled.div`
  right: 0px;
  top: 237px;
  padding: 60px 24px;
  position: absolute;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 16px;
`;
