import React from 'react'
import PropTypes from 'prop-types'


const RightArrow = ({ color, ...rest }) => {

    return (
        <svg {...rest} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="13.6959" y="10.4756" width="15.8146" height="2.96563" rx="1.48281" transform="rotate(-150 13.6959 10.4756)" fill={color} />
            <rect x="15.1787" y="9.09268" width="15.8146" height="2.96563" rx="1.48281" transform="rotate(150 15.1787 9.09268)" fill={color} />
        </svg>

    )

}

RightArrow.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

RightArrow.defaultProps = {
    color: 'grey',
    style: {
        width: 12,
        height: 12
    }
}

export default RightArrow