import React, { useContext } from 'react';
import { StyledHeader } from './HeaderStyle';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return(
        <StyledHeader>
            <strong> Hello from header component </strong>
            <Switch 
                onChange={toggleTheme} 
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.primary}
                onColor={colors.secondary}
            />
        </StyledHeader>
    )
}

export default Header;