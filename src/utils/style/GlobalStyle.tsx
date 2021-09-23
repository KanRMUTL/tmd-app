import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
    }

    #root {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
