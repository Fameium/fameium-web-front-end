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
   
       .productivity-list-wrapper{
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
                       font-size: 18px;
                       font-weight: 900;
                       color: grey;
                   }

                   .header__button{
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
    }
    

`

export default ProductivityStyledComponent