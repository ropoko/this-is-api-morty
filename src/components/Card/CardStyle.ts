import styled from 'styled-components';

export const StyledCard = styled.div`
    margin: auto;
    padding: 1.6rem;
    align-self: center;
    justify-self: center;

    header img {
        border-radius: 5px;
    }

    main {
        text-align: center;
        background-color: ${props => props.theme.colors.card.background};
        color: ${props => props.theme.colors.card.title};
        border-radius: 0 0 10px 10px;
        padding: 0.4rem;
    }
`;