import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    /* *{
    background: ${(props) => props.theme.bgColor} !important;
    background-color: ${(props) => props.theme.bgColor} !important;
    color:${(props) => props.theme.color} !important;
    }
     */
  }
`;
