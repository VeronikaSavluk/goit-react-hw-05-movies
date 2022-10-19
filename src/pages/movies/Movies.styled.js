import styled from "styled-components";
import { theme } from '../../styles';

export const SearchForm = styled.form`
margin: 10px 0;
`;

export const SearchInput = styled.input`
border: 1px solid ${theme.colors.grey};
border-right-style: hidden;
&:focus {
    outline: none;
}
`;

export const SearchBtn = styled.button`
width: 45px;
height: 23px;
text-align: center;
border: 1px solid ${theme.colors.grey};
`;

export const SearchItem = styled.li`
margin-bottom: 4px;
`;