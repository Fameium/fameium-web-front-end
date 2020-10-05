import styled from 'styled-components'

const ProductivityListStyled = styled.div`
    .productivitylist{
        width: 100%;
        padding-bottom: '100px';

        .list__item{
            height: 35px;
            margin-bottom: 8px;
            padding: 5px 8px;
            background-color: #F7F7F7;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: ${({ theme }) => theme.secondaryFont };

            :hover{
                background-color: ${({ theme }) => theme.primaryHeaderColor };
                opacity: 0.8;
                color: white;
                box-shadow: 1px 2px #888888;

            }

            .item__title{
                font-size: 15px;
                font-weight: 400;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-inline-start: 10px;
            }
        }
    }
`

export default ProductivityListStyled