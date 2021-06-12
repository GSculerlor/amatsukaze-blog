import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #151515;
    font-family: Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif; 
    line-height: 1.5;
    padding: 80px 0 40px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  .gatsby-highlight {
    margin: 0px -75px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 75px;
    }

    code[class*="language-"] {
      text-shadow: none;
      color: #f5f2f0;
    }
  }

  pre[class*="language-"] {
    background: #3b3b3b;
    color: rgb(65, 76, 94);  
  }

  .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
    background: #3b3b3b;
  }

  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
    color: #ce4681;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #3b3b3b;
  }

  code[class*="language-"] {
    text-shadow: none;
    color: #f5f2f0;
  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
`;
export default GlobalStyle;
