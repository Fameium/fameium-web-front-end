import React from 'react'
import PropTypes from 'prop-types'


const AddButtonIcon = ({ color, ...rest }) => {

    return (
        <svg {...rest} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 0C18.8403 0 0 18.8403 0 42C0 65.1597 18.8403 84 42 84C65.1597 84 84 65.1597 84 42C84 18.8403 65.1597 0 42 0ZM60.375 45.4998H45.4998V60.375C45.4998 62.3072 43.9322 63.8748 42 63.8748C40.0678 63.8748 38.5002 62.3072 38.5002 60.375V45.4998H23.625C21.6928 45.4998 20.1252 43.9322 20.1252 42C20.1252 40.0678 21.6928 38.5002 23.625 38.5002H38.5002V23.625C38.5002 21.6928 40.0678 20.1252 42 20.1252C43.9322 20.1252 45.4998 21.6928 45.4998 23.625V38.5002H60.375C62.3072 38.5002 63.8748 40.0678 63.8748 42C63.8748 43.9322 62.3072 45.4998 60.375 45.4998Z" fill={color} />
    </svg>

    )
}

AddButtonIcon.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

AddButtonIcon.defaultProps = {
    color: 'red',
    style: {
        width: 40,
        height: 40
    }
}

export default AddButtonIcon