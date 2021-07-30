import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
    
    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    .grid-ricks {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 2rem;
    }

    @media (min-width: 375px) {
        .grid-ricks {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (min-width: 768px) {
        .grid-ricks {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .grid-ricks {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1366px) {
        .grid-ricks {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1920px) {
        .grid-ricks {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;