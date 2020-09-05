import React from 'react'
import AppHeaderStyledComponent from './style'
import AppLogo from '../../../assets/AppLogo'
import labels from '../../../data/labels.json'

const AppHeader = (props) => {
    const { AppHeaderProps } = props
    return (
        <AppHeaderStyledComponent>
            <div className="appheader-wrapper">
                <div className="appheader-web">
                    <div className="appheader__logo">
                        <AppLogo color={'red'} style={{ height: '40px' }} />
                    </div>
                    <div className="appheader-title">
                        Fameium
                    </div>
                    <div className="appheader__menu">
                        <div className={AppHeaderProps.activeTab === 'productivity' ? 'menu__item menu__item--active' : 'menu__item' }>{labels.productivity}</div>
                        <div className={AppHeaderProps.activeTab === 'trendAnalysis' ? 'menu__item menu__item--active' : 'menu__item' }>{labels.trendAnalysis}</div>
                        <div className={AppHeaderProps.activeTab === 'utilities' ? 'menu__item menu__item--active' : 'menu__item' }>{labels.utilities}</div>
                        <div className={AppHeaderProps.activeTab === 'profile' ? 'menu__item menu__item--active' : 'menu__item' }>{labels.profile}</div>
                    </div>
                </div>

            </div>

        </AppHeaderStyledComponent>
    )
}

export default AppHeader