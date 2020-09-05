import styled from 'styled-components'

const AppHeaderStyledComponent = styled.div`
    .appheader-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 50px;
        border-bottom: 1px solid grey;
        
        .appheader-web{
            display: flex;
            flex-direction: row;
            align-items: center;

            .appheader__logo{
                margin-left: 10px;
                cursor: pointer;
            }
            .appheader-title{
                padding-left: 10px;
                font-weight: 900;
                font-size: 25px;
                color: red;
                cursor: pointer;
            }
        

            .appheader__menu{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: auto;
            
                .menu__item{
                    margin-right: 10px;
                    font-weight: 600;
                    cursor: pointer;

                    :hover{
                        color: red;
                    }
                }

            }
            .menu__item--active{
                color: red;
            }

        }
    }

    


`

export default AppHeaderStyledComponent