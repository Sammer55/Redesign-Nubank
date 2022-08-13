import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      border: 20px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #d2d2d2;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thum:hover {
      background-color: #d2d2d2;
    }
  }
`;

export default GlobalStyles;
