// import React from 'react';
import styled from 'styled-components'

const SignInStyledComponent = styled.div`

    ${({ logicProp, themeProp }) => console.log(logicProp)}

    .signin__button{
        border: 1px solid red;
        max-width: 100px;
        cursor: pointer;
        margin-top: 20px;
        text-align: center;
        padding: 8px 10px;
        border-radius: 5px;
        color: red;
        :hover{
            background-color: red;
            color: white;
        }
    }

    .signin-wrapper{
        width: 100vw;
        /* background-color: yellow; */
        padding-top: 80px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .signin-art{
        width: 45vw;
        height: 80vh;
        /* background-color: red; */
    }
    
    .signin-form{
        width: 45vw;
        height: 80vh;
        /* background-color: green; */

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input{
        margin-top: 3px;
        padding: 5px 5px;
        width: 80%;
        border-radius: 5px;
        padding: 13px 15px;
        font-size: 15px;
        border: 1px solid lightgrey;

        :hover{
            border: 1px solid darkgrey;

        }
    }

    .input-set{
        margin-top: 10px;
    }

    .button-set{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .forgot-buttons{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: 20%;
    }
    .link{
        color: grey;
        text-decoration: underline;
        margin: 0 4px;
        cursor: pointer;
        :hover{
            color: red;
        }
    }
   
 

`

export default SignInStyledComponent