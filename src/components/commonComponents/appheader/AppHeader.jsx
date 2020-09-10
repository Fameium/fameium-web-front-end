import React, { useState } from 'react'
import AppHeaderStyledComponent from './style'
import AppLogo from '../../../assets/AppLogo'
import Hamburger from '../../../assets/Hamburger'
import CloseIcon from '../../../assets/CloseIcon'
// import DropDownArrow from '../../../assets/DropDownArrow'
import SignOutIcon from '../../../assets/SignOutIcon'
import labels from '../../../data/labels.json'
import theme from '../../../data/theme.json'
import { useHistory } from 'react-router-dom';


const AppHeader = (props) => {
    const { AppHeaderProps = null } = props
    const history = useHistory()

    const [showDropDown, setShowDropDown] = useState(false)


    const doSignOutRitual = () => {
        window.localStorage.removeItem('isAuthenticated')
        history.push('/sign-in')
    }


    return (
        <AppHeaderStyledComponent theme={theme}>
            <div className="appheader-wrapper">
                <div className="appheader-web">
                    <div className="appheader__logo">
                        <AppLogo color={theme.primaryHeaderColor} />
                    </div>
                    <div className="appheader-title">
                        Fameium
                    </div>
                    <div className="appheader__menu--web">
                        <div className={AppHeaderProps && AppHeaderProps.activeTab === 'productivity' ? 'menu__item menu__item--active' : 'menu__item'}>{labels.productivity}</div>
                        <div className={AppHeaderProps && AppHeaderProps.activeTab === 'trendAnalysis' ? 'menu__item menu__item--active' : 'menu__item'}>{labels.trendAnalysis}</div>
                        <div className={AppHeaderProps && AppHeaderProps.activeTab === 'utilities' ? 'menu__item menu__item--active' : 'menu__item'}>{labels.utilities}</div>
                        <div className={AppHeaderProps && AppHeaderProps.activeTab === 'profile' ? 'menu__item menu__item--active' : 'menu__item'} >{labels.profile}</div>
                        <div className="signout" onClick={doSignOutRitual}><SignOutIcon color={theme.primaryHeaderColor} /></div>
                    </div>
                    <div className="hamburger" onClick={() => setShowDropDown(!showDropDown)}>{!showDropDown ? <Hamburger color={theme.primaryHeaderColor} /> : <CloseIcon color={theme.primaryHeaderColor} />}</div>
                </div>
                {showDropDown && <div className="appheader__menu--mobile"  >
                    <div className={AppHeaderProps && AppHeaderProps.activeTab === 'productivity' ? 'menu__item menu__item--active' : 'menu__item'}>{labels.productivity}</div>
                    <div className={AppHeaderProps && AppHeaderProps.activeTab === 'trendAnalysis' ? 'menu__item menu__item--active' : 'menu__item'}>{labels.trendAnalysis}</div>
                    <div className={AppHeaderProps && AppHeaderProps.activeTab === 'utilities' ? 'menu__item menu__item--active' : 'menu__item'}>{labels.utilities}</div>
                    <div className={AppHeaderProps && AppHeaderProps.activeTab === 'profile' ? 'menu__item menu__item--active' : 'menu__item'} >{labels.profile}</div>
                    <div className="signout menu__item" onClick={doSignOutRitual}><SignOutIcon color={theme.primaryHeaderColor} /></div>
                </div>}
            </div>

        </AppHeaderStyledComponent>
    )
}

export default AppHeader