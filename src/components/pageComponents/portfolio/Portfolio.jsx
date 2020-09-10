import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Portfolio = () => {

    const [inputValue, setInputValue] = useState('')
    let history = useHistory()
    if (localStorage.getItem('returningUser')) history.push('/sign-in')

    useEffect(() => {
        if (inputValue === 'xqa#xqa*') {
            localStorage.setItem('returningUser', true)
            history.push('/sign-in')
        }
    }, [history, inputValue])


    return (
        <div className="portfolio-wrapper">
            <div className="p"> This is the portfolio page</div>
            <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </div>
    )
}

export default Portfolio 