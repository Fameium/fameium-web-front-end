import React, { useEffect, useState } from 'react'
import ProductivityStyledComponent from './style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import ProductivityFooter from '../../commonComponents/ProductivityFooter/ProductivityFooter'
import ProductivityList from '../../commonComponents/productivityList/ProductivityList'
import theme from '../../../data/theme.json'
import AddButtonIcon from '../../../assets/AddButtonIcon'
import { useHistory } from 'react-router-dom';


const Productivity = () => {

    const [activeTab, setActiveTab] = useState('projects')
    const [dataForMobileView, setDataForMobileView] = useState(null)
    const [mobileViewTitle, setMobileViewTitle] = useState(null)
    const history = useHistory()

    const projectData = {
        "projects": [
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            },
            {
                "id": "jhfgdjshua",
                "title": "title one title one title one title one title one",

            }

        ]
    }

    useEffect(() => { //This is applicable only in mobile view
        if (activeTab === 'projects') {
            setDataForMobileView(projectData.projects)
            setMobileViewTitle('Projects')
        }
        if (activeTab === 'ideas') {
            setDataForMobileView(projectData.projects)
            setMobileViewTitle('Ideas')

        }
        if (activeTab === 'sponsorships') {
            setDataForMobileView(projectData.projects)
            setMobileViewTitle('Sponsorships')

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    const onFooterClick = (e) => {
        setActiveTab(e)
    }


    return (
        <ProductivityStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <div className="productivity-wrapper">
                <div className="productivity-list-wrapper-web">
                    <div className="productivity__list">
                        <div className="list__header">
                            <div className="header__title">Projects</div>
                            <div className="header__button" onClick={() => history.push('/productivity/new-project')}>New Project</div>
                        </div>
                        <div className="list"><ProductivityList data={projectData.projects} /></div>
                    </div>
                    <div className="productivity__list">
                        <div className="list__header">
                            <div className="header__title">Ideas</div>
                            <div className="header__button">New Idea</div>
                        </div>
                        <div className="list"><ProductivityList data={projectData.projects} /></div>
                    </div>
                    <div className="productivity__list">
                        <div className="list__header">
                            <div className="header__title">Sponsorships</div>
                            <div className="header__button">New Sponsorship</div>
                        </div>
                        <div className="list"><ProductivityList data={projectData.projects} /></div>

                    </div>
                </div>
                <div className="productivity-list-wrapper-mobile">
                    <div className="productivity__header">
                        <div className="header__title">{mobileViewTitle}</div>
                    </div>
                    <div className="productivity__list"><ProductivityList data={dataForMobileView && dataForMobileView} /></div>
                    <div className="add-button" onClick={() => history.push('/productivity/new-project')}><AddButtonIcon color='red' /></div>
                </div>
            </div>
            <ProductivityFooter activeTab={activeTab} onClickFunction={onFooterClick} />

        </ProductivityStyledComponent>
    )
}

export default Productivity