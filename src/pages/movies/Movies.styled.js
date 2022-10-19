import styled from "styled-components";
import { theme } from '../../styles';
import { GoSearch } from 'react-icons/go';

export const SearchForm = styled.form`
margin: 10px 0;
`;

export const SearchInput = styled.input`
font-size: ${theme.fontSizes.large};
padding-left: 15px;
text-aling: center;
height: 35px;
border: 2px solid ${theme.colors.green};
border-right-style: hidden;
background: inherit;
box-shadow: ${theme.shadows.small};
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
&:focus {
    outline: none;
}
`;

export const SearchBtn = styled.button`
width: 60px;
height: 35px;
text-align: center;
border: 2px solid ${theme.colors.green};
box-shadow: ${theme.shadows.small};
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
`;

export const SearchSvg = styled(GoSearch)`
rotate: 90deg;
`;

export const SearchItem = styled.li`
margin-bottom: 4px;
`;