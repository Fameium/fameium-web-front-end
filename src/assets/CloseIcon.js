import React from 'react'
import PropTypes from 'prop-types'


const CloseIcon = ({ color, ...rest }) => {

    return (
        <svg {...rest} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7904 12.5002L24.5249 2.76519C25.1584 2.13197 25.1584 1.10814 24.5249 0.474916C23.8917 -0.158305 22.8679 -0.158305 22.2346 0.474916L12.4999 10.2099L2.76535 0.474916C2.13185 -0.158305 1.10834 -0.158305 0.475128 0.474916C-0.158376 1.10814 -0.158376 2.13197 0.475128 2.76519L10.2096 12.5002L0.475128 22.2352C-0.158376 22.8684 -0.158376 23.8922 0.475128 24.5255C0.790694 24.8413 1.20562 25 1.62024 25C2.03487 25 2.44949 24.8413 2.76535 24.5255L12.4999 14.7905L22.2346 24.5255C22.5505 24.8413 22.9651 25 23.3798 25C23.7944 25 24.209 24.8413 24.5249 24.5255C25.1584 23.8922 25.1584 22.8684 24.5249 22.2352L14.7904 12.5002Z" fill={color} />
        </svg>

    )
}

CloseIcon.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

CloseIcon.defaultProps = {
    color: 'red',
    style: {
        width: 25,
        height: 25
    }
}

export default CloseIcon