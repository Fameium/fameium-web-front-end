// import React from 'react';
import styled from 'styled-components'

const ProductivityStyledComponent = styled.div`

   .productivity-wrapper{
       width: 100vw;
       max-width: 100%;
       max-height: 100%;
       padding-top: 50px;

       .list{
           height: 75vh;
            overflow-y: auto;
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
            ::-webkit-scrollbar { 
                display: none;  /* Safari and Chrome */
            }
       }
   
       .productivity-list-wrapper-web{
            @media screen and (max-width: 900px){
                display: none;
            }


           display: flex;
           flex-direction: row;

           .productivity__list{
               width: 33vw;
               /* height: ; */
               margin-top: 50px;
               max-height: 80vh;

               padding: 0px 25px;
            
           
               .list__header{
                   display: flex;
                   flex-direction: row;
                   align-items: center;
                   margin-bottom: 20px;

                   .header__title{
                    font-family: ${({ theme }) => theme.primaryFont };
                       font-size: 18px;
                       font-weight: 600;
                       color: grey;
                   }

                   .header__button{
                        font-family: ${({ theme }) => theme.secondaryFont };
                       font-size: 15px;
                       color: red;
                       padding: 5px 5px;
                       border: 1px solid red;
                       border-radius: 5px;
                       margin-left: auto;
                       cursor: pointer;

                       :hover{
                        color: white;
                        background-color: red;
                       }
                   }
               }

            }
       }

       .productivity-list-wrapper-mobile{
        padding: 0px 20px;
            @media screen and (min-width: 900px){
                display: none;
            }

            .productivity__header{
                .header__title{
                    font-family: ${({ theme }) => theme.primaryFont };
                    font-size: 20px;
                    font-weight: 600;
                    color: grey;
                    margin: 10px 0px;
                }
            }

            .add-button{
                position: fixed;
                bottom: 50px;
                right: 15px;
            }
       }

    }
    

`

export default ProductivityStyledComponent