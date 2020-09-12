// import React from 'react';
import styled from 'styled-components'

const SignInStyledComponent = styled.div`

   .login-wrapper{
       width: 100vw;
       height: 100vh;
       display: flex;
       
       .col-1{
           flex: 1;
           /* background-color: red; */
           @media screen and (max-width: 900px){ display: none }
       }
       .col-2{
           flex: 1;
           /* background-color: green; */
           padding: 0px 10vw 0px 10vw;
           display: flex;
           flex-direction: column;
           justify-content: center;

           .field{
               margin-bottom: 20px;
           }

           .login-button{
               width:30%;
               max-width: 30vw;
           }
       }

   }

`

export default SignInStyledComponent