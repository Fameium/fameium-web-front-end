import styled from 'styled-components'

const ProjectFormStyledComponent = styled.div`
    .form-desktop-wrapper{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-top: 10px;
        padding: 0px 3vw;

        .form-header{
            display: flex;
            flex-direction: row;
            margin: 68px 0px 0px;
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

        .form-section{ 
            margin-bottom: 10px; 
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;     
        }
        .title{ size: 18px; 
            margin-bottom: 5px; 
            font-family: ${({ theme }) => theme.primaryFont }; 
            font-weight: 900;
            min-width: 0px;
        }

        .form-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            min-height: 50vh; /**tbr */
            margin: 27px 0px 0px;
            @media screen and (max-width: 900px){ flex-wrap: wrap; }

            
            input, textarea{
                box-sizing:border-box; 
                padding: 14px 10px; 
                outline: 0px; 
                border-radius: 5px;
                border: solid 1px grey;/**QQQ */ 
                font-family: ${({ theme }) => theme.secondaryFont }; 
            }
            input{ width: 100% }
            textarea{ min-width:100%; min-height: 100px; max-width: 88.5vw;
             @media screen and (min-width: 900px){ max-width: 44vw; }
             }

            .form-column-1{
                display: flex;
                flex-direction: column;
                flex-basis: 50%;
                /* background-color: green;*tbr */
                padding-right: 20px;
                @media screen and (max-width: 900px){ padding-right: 0px; flex: 0 0 100%; }
            }
            .form-column-2{
                display: flex;
                flex-direction: column;
                flex-basis: 50%; 
                background-color: red;/**tbr */
                padding-left: 20px;
                @media screen and (max-width: 900px){ padding-left: 0px; flex: 0 0 100%; }
            }

            .inline-one{
                display: flex;
                flex-direction: row;
                .one{ flex: 1; }
                .two{ flex: 2; margin-left: 20px; }
            }

            .inline-two{
                display: flex;
                flex-direction: row;
                .one{ flex: 1; }
                .two{ 
                    flex: 2; 
                    margin-left: 20px; 
                    display: flex;
                    .status-wrapper{ 
                        flex: 1;  
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis; 
                    }
                    .save-button{ 
                        flex: 1; 
                        margin-left: 20px; 
                        text-align: center;
                        border-radius: 5px;
                        border: 1px solid red;
                        margin-top: auto;
                        margin-bottom: 10px;
                        padding: 13px 10px;
                        color: red;
                        font-size: 17px;
                        font-weight: 600;
                        cursor: pointer;
                        max-height: 50px;
                        :hover{
                            background-color: red;
                            color: white;
                        }
                    }


                }
            }

            .date{/**Over riding default width of date input field */
                width: 0;
                min-width: 100%;
            }

            .sponsorship-button{
                font-family: ${({ theme }) => theme.secondaryFont }; 
                font-size: 17px;
                background-color: green;
                border-radius: 5px;
                padding: 14px 10px; 
                border: 1px solid grey;
                white-space: nowrap;
                overflow: hidden;
                max-height: 30px;

            }


        }

    }
`


export default ProjectFormStyledComponent