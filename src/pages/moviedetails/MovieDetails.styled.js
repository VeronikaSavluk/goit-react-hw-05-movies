import styled from "styled-components";
import { theme } from '../../styles';

export const Container = styled.main`
padding: 20px;
`;

export const MovieInfo = styled.div`
display: flex;
align-itms: flex-start;
margin: 10px 0;
padding-bottom: 10px;
border-bottom: 1px solid ${theme.colors.grey};
`;

export const Additionion = styled.div`
padding-bottom: 10px;
border-bottom: 1px solid ${theme.colors.grey};
`;

export const Poster = styled.img`
margin-right: 15px;
`;
export const Name = styled.h2`
margin-bottom: 10px;
`;

export const Title = styled.h3`
margin-bottom: 10px;
`;

export const Text = styled.p`
margin-bottom: 10px;
text-align: justify;
`;

export const InfoList = styled.ul`

`;

export const InfoItem = styled.li`
font-weight: 500;
font-size: ${theme.fontSizes.medium};
color: ${theme.colors.blue};
&:not(:last-child){
margin-bottom: 8px;
}
`;