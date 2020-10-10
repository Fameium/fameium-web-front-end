import React from 'react'
import PropTypes from 'prop-types'


const ThreeDots = ({ color, ...rest }) => {

    return (
        <svg {...rest} viewBox="0 0 33 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.5" cy="4.5" r="4.5" fill={color} />
            <circle cx="16.5" cy="4.5" r="4.5" fill={color} />
            <circle cx="28.5" cy="4.5" r="4.5" fill={color} />
        </svg>

    )

}

ThreeDots.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

ThreeDots.defaultProps = {
    color: 'grey',
    style: {
        width: '33px',
        height: '9px'
    }
}

export default ThreeDots