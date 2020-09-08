import styled from 'styled-components'

const ProductivityFooterStyled = styled.div`
    .productivity-footer-wrapper{
        position: fixed;
        height: 35px;
        width: 100vw;
        bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: white;
         /* //QQQ */
        padding: 5px 0px;
        border-top: 1px solid grey;

        .icon-group{
            text-align: center;
            font-size: 10px;
        }

        @media screen and (min-width: 900px){
                display: none;
            }
    }
` 

export default ProductivityFooterStyled
