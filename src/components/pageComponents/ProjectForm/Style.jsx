import styled from 'styled-components'

const ProjectFormStyledComponent = styled.div`
    .form-desktop-wrapper{
        display: flex;
        flex-direction: column;
        width: 100vw;
        margin-top: 50px;

        .form-header{
            display: flex;
            flex-direction: row;
            margin: 68px 35px 0px 35px;
            padding-bottom: 5px;
            border-bottom: 1px solid grey;
            align-items: baseline;
            .header-title{
                font-size: 21px;
                font-weight: bold;
                font-family: ${({ theme }) => theme.primaryFont };
                color: red; /**QQQ */
            }
            .header-last-edit{
                margin-left: auto;
                font-size: 15px;
                font-weight: 300;
                font-family: ${({ theme }) => theme.secondaryFont };
                color: #7e7e7e;


            }

        }
        .form-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            min-height: 50vh; /**tbr */
            margin: 27px 35px 0px 35px;
            .form-column-1{
                width: 45vw;
                /* background-color: green; *tbr */
            }
            .form-column-2{
                width: 45vw;
                background-color: blue; /**tbr */
            }

            .field-title{
                font-family: ${({ theme }) => theme.primaryFont };
                font-weight: 500;
                color: black /**QQQ */
                font-size: 18px;
                margin-bottom: 6px;

            }

            .field-input{
                border: 1px solid #7e7e7e;
                font-family: ${({ theme }) => theme.secondaryFont };
                padding: 14px 15px 14px 15px;
                font-size: 14px;
                width: 40vw;
                margin-bottom: 20px;
                outline: 0;
                :focus{
                    border-color: red; /**QQQ */
                }

            }

            .description{ height: 106px; width:40vw; max-width:40vw; min-width:40vw; }

            .inline{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }

            .inline-group-start-date{
                /* max-width: 150px; */
                flex-grow: 1;
            }

            .inline-group-sponsorships{
                /* max-width: 150px; */
                flex-grow: 2;
                margin-left: calc(40vw - 335px);
            }
            .date{
                /* width: 100px; */
                
            }
            .sponsorship{
                /* width: 200px; */
            }

            .status{
                width: 100px;

            }
            .inline-group-status{
                margin-left: 3vw;
            }
            .inline-group-button{
                margin-left: 3vw;
                height: 20px;
                font-family: ${({ theme }) => theme.primaryFont };
                font-size: 20px;
                color: #000;
                border: 1px solid red;
                margin-bottom: 20px;
                font-weight: 600;
                color: red;
                padding: 12px 10px;
                border-radius: 5px;
                text-align: center;
                cursor: pointer;
                :hover{
                    color: white;
                    background-color: red;
                }
            }

        }

    }
`


export default ProjectFormStyledComponent