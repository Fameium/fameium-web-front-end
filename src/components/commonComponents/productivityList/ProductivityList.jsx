import React from 'react'
import ProductivityListStyled from './style'

const ProductivityList = ({ data }) => {
    console.log('data', data)
    return(
    <ProductivityListStyled>
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