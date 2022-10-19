import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const Header = styled.header`
    padding: 20px;
    height: 60px;
    border-bottom: 1px solid #A9A9A9;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Link = styled(NavLink)`
color: inherit;
font-weight: 700;
&.active {
    color: ${theme.colors.accent};
}
`;