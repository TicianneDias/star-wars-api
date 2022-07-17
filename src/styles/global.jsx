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
        background: #000;
    }

    ::-webkit-scrollbar-track
{
	background-color: #101010;

    &:hover{
        background-color: yellow;
    }
}

::-webkit-scrollbar
{
	width: 10px;

}

::-webkit-scrollbar-thumb
{
	background-color: yellow;
	border: 2px solid #555555;

    &:hover{
        background-color: black;
    }
}

    main {
        max-width: 100rem;
        margin: 0 auto;
        padding: 5rem 1.2rem;
}

`;
