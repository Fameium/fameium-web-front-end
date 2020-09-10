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
                        <div className="form-section">
                            <div className="title">Project Name</div>
                            <input type="text" size='1' />
                        </div>
                        <div className="form-section">
                            <div className="title">Description</div>
                            <textarea />
                        </div>
                        <div className="form-section">
                            <div className="title">Notes</div>
                            <textarea />
                        </div>

                        <div className="inline-one form-section">
                            <div class='one' type='text' size='1' >
                                <div className="form-section">
                                    <div className="title">Start Date</div>
                                    <input type="date" size='1' />
                                </div>
                            </div>
                            <div class='two' type='text' size='1' >
                                <div className="form-section">
                                    <div className="title">Sponsorships</div>
                                    <div className="sponsorship-button">Select a Sponsor</div>
                                </div>
                            </div>
                        </div>

                        <div className="inline-two form-section">
                            <div class='one' type='text' size='1' >
                                <div className="form-section">
                                    <div className="title">End Date</div>
                                    <input type="date" size='1' />
                                </div>
                            </div>
                            <div class='two' type='text' size='1' >
                                <div className="form-section status-wrapper">
                                    <div className="title">Status</div>
                                    <div className="sponsorship-button">Select a Sponsor</div>
                                </div>
                                <div className="save-button ">Save</div>

                            </div>
                        </div>


                    </div>
                    <div className="form-column-2 form-section">
                        <input type='text' />

                    </div>
                </div>

            </div>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm