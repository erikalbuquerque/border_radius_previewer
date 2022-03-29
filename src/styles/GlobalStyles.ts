import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --brown-700: #423232;
    --red-400: #ff5733;
    --green-500: #3db13d;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
  }
`;
