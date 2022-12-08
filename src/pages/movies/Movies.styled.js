import styled from "styled-components";
import { theme } from '../../styles';
import { GoSearch } from 'react-icons/go';
import { Link } from "react-router-dom";

export const SearchForm = styled.form`
display: flex;
margin: 10px 0;
`;

export const SearchInput = styled.input`
font-size: ${theme.fontSizes.large};
padding: 4px;
padding-left: 15px;
text-aling: center;
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
width: 40px;
text-align: center;
border: 2px solid ${theme.colors.green};
border-left-style: hidden;
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

export const Info = styled(Link)`
color: ${theme.colors.darkgreen};
`;