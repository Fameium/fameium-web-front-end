import React from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import theme from '../../../data/theme.json'


const ProjectForm = () => {

    return (
        <ProjectFormStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <div className="form-desktop-wrapper">
                <div className="form-header">
                    <div className="header-title">Add New Project</div>
                    <div className="header-last-edit">Last Edited: 27782/232/3232</div>
                </div>
                <div className="form-wrapper">
                    <div className="form-column-1">
                        <div className="field-title">Project Name</div>
                        <input className="field-input gs_border-radius" type='text' />

                        <div className="field-title">Description</div>
                        <textarea className="field-input description" />

                        <div className="field-title">Notes</div>
                        <textarea className="field-input description" />

                        <div className="inline">
                            <div className="inline-group-start-date">
                                <div className="field-title">Start date</div>
                                <input className="field-input date" type='date' />
                            </div>
                            <div className="inline-group-sponsorships">
                                <div className="field-title">Sponsorship</div>
                                <input className="field-input sponsorship" type='date' />
                            </div>
                        </div>

                        <div className="inline">
                            <div className="inline-group-end-date">
                                <div className="field-title">End date</div>
                                <input className="field-input date" type='date' />
                            </div>
                            <div className="inline-group-status">
                                <div className="field-title">End date</div>
                                <input className="field-input status" type='date' />
                            </div>
                            <div className="inline-group-button">Save</div>
                        </div>


                    </div>
                    <div className="form-column-2"></div>
                </div>

            </div>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm