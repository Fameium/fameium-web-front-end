import React from 'react'
import './AppsHome.css'
import AppHeader from '../../commonComponents/appheader/AppHeader'

import AppArtA from '../../../assets/AppArtA';
import AppArtB from '../../../assets/AppArtB';
import AppArtC from '../../../assets/AppArtC';
import AppArtZ from '../../../assets/AppArtZ';


const AppHome = () => {

    return (
        <>
            <AppHeader AppHeaderProps={{ activeTab: 'utilities' }} />
            <div className="apps-home-wrapper">
                <div className="app a">
                    <div className="app-illustration">
                        <AppArtA />
                    </div>
                    <div className="bottom-bar" />
                    <div className="bar-title">Brand Name Generator</div>
                    <div className="bar-sub-title">Get unique simple online identity</div>
                </div>
                <div className="app b">
                    <div className="app-illustration">
                        <AppArtB />
                    </div>
                    <div className="bottom-bar" />
                    <div className="bar-title">Brand Name Generator</div>
                    <div className="bar-sub-title">Get unique simple online identity</div>
                </div>
                <div className="app c">
                    <div className="app-illustration">
                        <AppArtC />
                    </div>
                    <div className="bottom-bar" />
                    <div className="bar-title">Brand Name Generator</div>
                    <div className="bar-sub-title">Get unique simple online identity</div>
                </div>
                {/* <div className="app d"></div> */}
                {/* <div className="app e"></div> */}
                <div className="app z">
                    <div className="app-illustration">
                        <AppArtZ style={{ width: '229px', height: '155px', paddingLeft: '50px' }} />
                    </div>
                    <div className="bar-title">More Apps soon.</div>
                </div>
            </div>
        </>
    )
}

export default AppHome