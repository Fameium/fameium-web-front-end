import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ProductivityListStyled from './style'
import theme from '../../../data/theme.json'
import { MasterContext } from '../../../context/MasterContext'



const ProductivityList = ({ data, type = null }) => {

    const history = useHistory()
    const { MasterDispatch } = useContext(MasterContext)


    function clickOnItem(e) {
        console.log('xx', e)
        if (type) {
            MasterDispatch({ type: 'SET_SELECTED_ITEM', value: e })
            switch (type) {
                case 'project':
                    history.push(`/productivity/project/${e.id}/view`)
                    break;
                case 'idea':
                    history.push(`/productivity/idea/${e.id}/view`)
                    break;
                case 'sponsorship':
                    history.push(`/productivity/sponsorship/${e.id}/view`)
                    break;
                default:
                    break;

            }
        }
    }

    return (
        <ProductivityListStyled theme={theme}>
            <div className="productivitylist">
                {/* {console.log('list', data)} */}
                {data && data.map(e => {
                    return <div className="list__item" id={e.id} onClick={() => clickOnItem(e)}>
                        <div className="item__title">{e.name}</div>
                    </div>
                })}
            </div>
        </ProductivityListStyled>
    )
}

export default ProductivityList