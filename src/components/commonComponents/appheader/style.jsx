import styled from 'styled-components'

const AppHeaderStyledComponent = styled.div`
    .appheader-wrapper{
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        height: 50px;
        border-bottom: 1px solid #E8E8E8;
        
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
                font-size: 30px;
                color: red;
                cursor: pointer;
            }
        

            .appheader__menu{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: auto;
                margin-right: 15px;
            
                .menu__item{
                    margin-right: 10px;
                    font-weight: 600;
                    padding: auto 0px;
                    cursor: pointer;

                    :hover{
                        color: red;
                    }
                }

            }
            .menu__item--active{
                color: red;
            }

            .signout{
                cursor: pointer;
                height: 20px;
                margin-right: 10px;

                :hover{
                    path{
                        fill: black;
                    }

                }
            }

           

        }
    }

    


`

export default AppHeaderStyledComponent