import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: ${props => props.theme.colors.background};

    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    
    .logo {
        width: 22rem;
        grid-column-start: 2;
        justify-self: center;
    }

    .switch {
        margin-right: .5rem;
    }
`