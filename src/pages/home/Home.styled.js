import styled from "styled-components";
import { theme } from '../../styles';
import { Link } from "react-router-dom";

export const Title = styled.h1`
margin-bottom: 10px;
`;

export const MoviesItem = styled.li`
margin-bottom: 4px;
`;

export const Info = styled(Link)`
color: ${theme.colors.darkgreen};
`;
