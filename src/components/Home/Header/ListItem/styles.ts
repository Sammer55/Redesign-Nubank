import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: none;
  }

  :hover {
    color: #1e1e1e;
  }
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #49474b;
  gap: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Bullet = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #820ad1;
`;
