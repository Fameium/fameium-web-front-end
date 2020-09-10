import React from 'react'
import PropTypes from 'prop-types'


const CloseButtonIcon = ({ color, ...rest }) => {

    return (
        <svg viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.6985 12.3015C55.3221 -4.07489 28.6779 -4.07489 12.3015 12.3015C-4.07487 28.6779 -4.07487 55.3221 12.3015 71.6985C28.6779 88.0749 55.3221 88.0749 71.6985 71.6985C88.0749 55.3221 88.0749 28.6779 71.6985 12.3015ZM52.5184 57.4678L42 46.9494L31.4816 57.4678C30.1154 58.8341 27.8985 58.8341 26.5322 57.4678C25.1659 56.1015 25.1659 53.8846 26.5322 52.5184L37.0506 42L26.5322 31.4816C25.1659 30.1153 25.1659 27.8985 26.5322 26.5322C27.8985 25.1659 30.1154 25.1659 31.4816 26.5322L42 37.0506L52.5184 26.5322C53.8847 25.1659 56.1015 25.1659 57.4678 26.5322C58.8341 27.8985 58.8341 30.1153 57.4678 31.4816L46.9495 42L57.4678 52.5184C58.8341 53.8846 58.8341 56.1015 57.4678 57.4678C56.1015 58.8341 53.8847 58.8341 52.5184 57.4678Z" fill={color} />
        </svg>

    )
}

CloseButtonIcon.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

CloseButtonIcon.defaultProps = {
    color: 'red',
    style: {
        width: 25,
        height: 25
    }
}

export default CloseButtonIcon