// import React from 'react';
import styled from 'styled-components'

const SignInStyledComponent = styled.div`

    ${({ logicProp, themeProp }) => console.log(logicProp)}

    .signin__button{
        border: 1px solid red;
        max-width: 100px;
        cursor: pointer;
        margin-top: 20px;
    }
    

`

export default SignInStyledComponent