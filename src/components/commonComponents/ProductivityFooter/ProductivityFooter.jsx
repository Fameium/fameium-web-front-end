import React from 'react'
import ProductivityFooterStyled from './Style'
import ProjectIcon from '../../../assets/ProjectIcon'
import IdeaIcon from '../../../assets/IdeaIcon'
import SponsorshipIcon from '../../../assets/SponsorshipIcon'

const ProductivityFooter = ({ activeTab, onClickFunction }) => {


    return (
        <ProductivityFooterStyled>
            <div className="productivity-footer-wrapper">
                <div className="icon-group" onClick={() => onClickFunction('project')}>
                    <ProjectIcon color={ activeTab === 'project' ? 'red' : 'grey'} />
                    <div className="icon-title" style={{ color: activeTab === 'project' ? 'red' : 'grey' }} >Projects</div>
                </div>
                <div className="icon-group" onClick={() => onClickFunction('idea')}>
                    <IdeaIcon color={ activeTab === 'idea' ? 'red' : 'grey'} />
                    <div className="icon-title" style={{ color: activeTab === 'idea' ? 'red' : 'grey' }}  >Ideas</div>

                </div>
                <div className="icon-group" onClick={() => onClickFunction('sponsorship')}>
                    <SponsorshipIcon color={ activeTab === 'sponsorship' ? 'red' : 'grey'} />
                    <div className="icon-title" style={{ color: activeTab === 'sponsorship' ? 'red' : 'grey' }} >Sponsorships</div>

                </div>
            </div>
        </ProductivityFooterStyled>
    )
}

export default ProductivityFooter