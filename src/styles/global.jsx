import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: black;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Star Wars';
        color: white;
    }

    body{
        margin: 0 50px;
        background: black;
    }

    main {
        max-width: 100rem;
        margin: 0 auto;
        padding: 5rem 1.2rem;
}
`;