import React from 'react'
import ProductivityListStyled from './style'
import theme from '../../../data/theme.json'

const ProductivityList = ({ data }) => {
    console.log('data', data)
    return(
    <ProductivityListStyled theme={theme}>
        <div className="productivitylist">
            {data.map(e => {
                return <div className="list__item" id={e.id}>
                   <div className="item__title">{e.title}</div> 
                </div>
            })}
        </div>
    </ProductivityListStyled>
)
}

export default ProductivityList