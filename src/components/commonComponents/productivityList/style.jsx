import styled from 'styled-components'

const ProductivityListStyled = styled.div`
    .productivitylist{
        width: 100%;
        padding-bottom: '100px';

        .list__item{
            height: 35px;
            margin-bottom: 8px;
            padding: 5px 8px;
            background-color: #F4F4F4;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: ${({ theme }) => theme.secondaryFont };

            :hover{
                background-color: #E8E8E8;
                box-shadow: 1px 2px #888888;

            }

            .item__title{
                font-size: 15px;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
`

export default ProductivityListStyled