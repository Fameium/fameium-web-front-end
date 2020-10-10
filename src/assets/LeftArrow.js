import React from 'react'
import PropTypes from 'prop-types'


const LeftArrow = ({ color, ...rest }) => {

    return (
        <svg {...rest} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.18852" y="4.95082" width="11.8018" height="2.21311" rx="1.10656" transform="rotate(30 1.18852 4.95082)" fill={color}/>
        <rect x="0.0819702" y="5.98285" width="11.8018" height="2.21311" rx="1.10656" transform="rotate(-30 0.0819702 5.98285)" fill={color}/>
        </svg>        
    )

}

LeftArrow.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

LeftArrow.defaultProps = {
    color: 'grey',
    style: {
        width: 12,
        height: 12
    }
}

export default LeftArrow