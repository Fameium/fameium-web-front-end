import React, { useEffect, useState } from 'react'
import ProductivityStyledComponent from './style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import ProductivityFooter from '../../commonComponents/ProductivityFooter/ProductivityFooter'
import ProductivityList from '../../commonComponents/productivityList/ProductivityList'
import theme from '../../../data/theme.json'
import AddButtonIcon from '../../../assets/AddButtonIcon'
import { useHistory } from 'react-router-dom';
import api from './../../../APIs/api'
import utilFunctions from '../../../utilityFunctions/localStorage'

const Productivity = () => {

    const [activeTab, setActiveTab] = useState('projects')
    const [dataForMobileView, setDataForMobileView] = useState(null)
    const [projects, setProjects] = useState(null)
    const [ideas, setIdeas] = useState(null)
    const [sponsorships, setSponsorships] = useState(null)
    const history = useHistory()
    const { get } = api()
    // const { MasterDispatch, tokenHeader, activeTenant, productivityData } = useContext(MasterContext)
    const { getItem } = utilFunctions

    // let projectData = {}
    let params = { tenant_id: getItem('auth-data').user.tenants[0].id }
    const header = { Authorization: `token ${getItem('auth-data').token}` }
    useEffect(() => {

        if(!projects || !ideas || !sponsorships) get('productivity', params, header, {} ).then((res) => {
            console.log('RES', res )
            setProjects(res.data.projects)
            setDataForMobileView(res.data.projects)
            setIdeas(res.data.ideas)
            setSponsorships(res.data.sponserships) //SM
        }).catch((error) => {
            console.log('Error in fetching productivity data.', error)
        })
        


    }, [projects, ideas, sponsorships])
    
    

    useEffect(() => { //This is applicable only in mobile view
        if (activeTab === 'projects') {
            setDataForMobileView(projects)
        }
        if (activeTab === 'ideas') {
            setDataForMobileView(ideas)

        }
        if (activeTab === 'sponsorships') {
            setDataForMobileView(sponsorships)

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    const onFooterClick = (e) => {
        setActiveTab(e)
    }


    return (
        <ProductivityStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            {console.log('prod', projects, ideas, sponsorships)}
            <div className="productivity-wrapper">
                <div className="productivity-list-wrapper-web">
                    <div className="productivity__list">
                        <div className="list__header">
                            <div className="header__title">Projects</div>
                            <div className="header__button" onClick={() => history.push('/productivity/project/new')}>New Project</div>
                        </div>
                        <div className="list"><ProductivityList data={projects} type='project' /></div>
                    </div>
                    <div className="productivity__list">
                        <div className="list__header">
                            <div className="header__title">Ideas</div>
                            <div className="header__button">New Idea</div>
                        </div>
                        <div className="list"><ProductivityList data={ideas} type='idea' /></div>
                    </div>
                    <div className="productivity__list">
                        <div className="list__header">
                            <div className="header__title">Sponsorships</div>
                            <div className="header__button">New Sponsorship</div>
                        </div>
                        <div className="list"><ProductivityList data={sponsorships} type='sponsorship' /></div>

                    </div>
                </div>
                <div className="productivity-list-wrapper-mobile">
                   
                    <div className="productivity__list"><ProductivityList data={dataForMobileView && dataForMobileView} type='project' /></div>
                    <div className="add-button" onClick={() => history.push('/productivity/project/new')}><AddButtonIcon color='red' /></div>
                </div>
            </div>
            <ProductivityFooter activeTab={activeTab} onClickFunction={onFooterClick} />

        </ProductivityStyledComponent>
    )
}

export default Productivity