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
        border-bottom: 1px solid ${({ theme }) => theme.headerBorder };
        background-color: ${({ theme }) => theme.headerBackground };

        
        .appheader-web{
            display: flex;
            flex-direction: row;
            align-items: center;

            .appheader__logo{
                margin-left: 10px;
                cursor: pointer;
            }
            .appheader-title{
                font-family: ${({ theme }) => theme.titleFont };
                padding-left: 10px;
                font-weight: 300;
                font-size: 30px;
                color: ${({ theme }) => theme.primaryHeaderColor };
                cursor: pointer;
            }
        

            .appheader__menu--web{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: auto;
                margin-right: 15px;
                font-family: ${({ theme }) => theme.primaryFont };
                color:  ${({ theme }) => theme.secondaryHeaderColor };

                @media screen and (max-width: 900px){
                    display: none;
                }
            
                .menu__item{
                    margin-right: 10px;
                    font-weight: 600;
                    padding: auto 0px;
                    cursor: pointer;

                    :hover{
                        color: ${({ theme }) => theme.primaryHeaderColor };
                    }
                }

            }
            .menu__item--active{
                color: ${({ theme }) => theme.primaryHeaderColor };
            }

            .signout{
                cursor: pointer;
                height: 20px;
                margin-right: 10px;

                :hover{
                    path{
                        fill: ${({ theme }) => theme.secondaryHeaderColor };
                    }

                }
            }

            .hamburger{
                height: 20px;
                margin-right: 10px;
                margin-left: auto;

                @media screen and (min-width: 900px){
                    display: none;
                }
            }
        }
        
        .appheader__menu--mobile{
            width: 100vw;
            height: calc(100vh - 50px);
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 50px;
            align-items: center;
            background-color: white;

            .menu__item{
                width: 100vw;
                border-bottom: 1px solid grey;
                padding-top: 15px;
                padding-bottom: 15px;
                text-align: center;
                font-weight: 600;
            }
            .menu__item--active{
                color: ${({ theme }) => theme.primaryHeaderColor };
                font-weight: 900;
            }
        }

    }

    


`

export default AppHeaderStyledComponent