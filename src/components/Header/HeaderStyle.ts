import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: ${props => props.theme.colors.header.background};

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;

    .logo {
        width: 19rem;
        grid-column-start: 2;
        justify-self: center;
    }

    .switch {
        margin-right: .5rem;
        justify-self: flex-end;
    }
`