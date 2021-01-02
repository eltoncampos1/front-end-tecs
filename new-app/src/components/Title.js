import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: sans-serif;
    color: ${({theme}) => theme.text};
    font-size: 1.5rem;
`;

const Title = ({ children }) => (
    <StyledTitle>{children}</StyledTitle>
);

export default Title;
