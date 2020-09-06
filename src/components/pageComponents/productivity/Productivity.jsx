// import React, { useEffect, useState } from 'react'
import React from 'react'
import ProductivityStyledComponent from './style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import ProductivityList from '../../commonComponents/productivityList/ProductivityList'
import theme from '../../../data/theme.json'

const Productivity = () => {


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


    return (
        <ProductivityStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <div className="productivity-wrapper">
                <div className="productivity-list-wrapper">
                    <div className="productivity__list">
                    <div className="list__header">
                        <div className="header__title">Projects</div>
                        <div className="header__button">New Project</div>
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
            </div>
        </ProductivityStyledComponent>
    )
}

export default Productivity