import React from 'react'
import ProductivityFooterStyled from './Style'
import ProjectIcon from '../../../assets/ProjectIcon'
import IdeaIcon from '../../../assets/IdeaIcon'
import SponsorshipIcon from '../../../assets/SponsorshipIcon'

const ProductivityFooter = ({ activeTab, onClickFunction }) => {


    return (
        <ProductivityFooterStyled>
            <div className="productivity-footer-wrapper">
                <div className="icon-group" onClick={() => onClickFunction('projects')}>
                    <ProjectIcon color={ activeTab === 'projects' ? 'red' : 'grey'} />
                    <div className="icon-title" style={{ color: activeTab === 'projects' ? 'red' : 'grey' }} >Projects</div>
                </div>
                <div className="icon-group" onClick={() => onClickFunction('ideas')}>
                    <IdeaIcon color={ activeTab === 'ideas' ? 'red' : 'grey'} />
                    <div className="icon-title" style={{ color: activeTab === 'ideas' ? 'red' : 'grey' }}  >Ideas</div>

                </div>
                <div className="icon-group" onClick={() => onClickFunction('sponsorships')}>
                    <SponsorshipIcon color={ activeTab === 'sponsorships' ? 'red' : 'grey'} />
                    <div className="icon-title" style={{ color: activeTab === 'sponsorships' ? 'red' : 'grey' }} >Sponsorships</div>

                </div>
            </div>
        </ProductivityFooterStyled>
    )
}

export default ProductivityFooter