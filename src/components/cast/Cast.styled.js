import styled from "styled-components";
import { theme } from '../../styles';

export const CastList = styled.ul`
padding: 20px 0;
`;

export const CastItem = styled.li`
margin-bottom: 20px;
`;

export const Portret = styled.img`
width: 75px;
height: 120px;
`;

export const CastTitle = styled.p`
margin: 8px 0;
font-size: ${theme.fontSizes.medium};
font-weight: 500;
`;

export const CastContent = styled.p`
text-align: justify;
font-size: ${theme.fontSizes.small};
font-weight: 500;
`;

export const Character = styled.span`
font-weight: normal;
`;