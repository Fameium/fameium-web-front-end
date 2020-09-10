import React from 'react'
import PropTypes from 'prop-types'


const IdeaIcon = ({ color, ...rest }) => {

    return (
        <svg {...rest} viewBox="0 0 95 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6751 83.0668C20.1087 85.9754 22.3855 89.916 23.2081 94.2175H43.1851V66.239C36.4196 64.4911 31.4073 58.3361 31.4073 51.032H39.2591C39.2591 55.3615 42.7815 58.8839 47.111 58.8839C51.4405 58.8839 54.9629 55.3615 54.9629 51.032H62.8147C62.8147 58.3358 57.8024 64.4911 51.0369 66.239V94.2173H71.0184C71.8499 89.9168 74.1484 85.9566 77.6145 83.0093C88.169 74.0346 94.2222 60.9484 94.2222 47.1061C94.2222 4.87557 42.7189 -15.8641 13.3888 14.2677C-5.75302 33.9335 -4.11669 65.4541 16.6751 83.0668Z" fill={color} />
            <path d="M47.111 134C55.77 134 62.8147 126.955 62.8147 118.296H31.4073C31.4073 126.955 38.452 134 47.111 134Z" fill={color} />
            <path d="M23.5554 102.069H70.6666V110.444H23.5554V102.069Z" fill={color} />
        </svg>

    )
}

IdeaIcon.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

IdeaIcon.defaultProps = {
    color: 'red',
    style: {
        width: 15,
        height: 15
    }
}

export default IdeaIcon