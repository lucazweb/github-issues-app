import { injectGlobal } from 'styled-components';

injectGlobal`

  $cor-background-padrao: #f3f3f3;

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: $cor-background-padrao;
    text-rendering: optimizeLegibility !important;
    -webkkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

`;
