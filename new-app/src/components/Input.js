import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid ${({theme}) => theme.border};
    color:${({theme}) => theme.text};
    font-size: 2rem;
    padding: .5rem 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;

    &:focus {
        outline: none;
        box-shadow: ${({theme}) => theme.shadow};
    }
`;

const Input = () => (
    <StyledInput />
);

export default Input;
