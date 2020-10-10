import React, { useState } from 'react';
import AppHeader from '../../commonComponents/appheader/AppHeader';
import TrendLoading from '../../../assets/TrendLoading';
import LeftArrow from '../../../assets/LeftArrow';
import RightArrow from '../../../assets/RightArrow';
import ThreeDots from '../../../assets/ThreeDots'
import './TrendHome.css'


const TrendHome = () => {
    const [showLoader, setShowLoader] = useState(true)

    setTimeout(() => {
        setShowLoader(false)
    }, 2000)


    return (
        <>
            <AppHeader AppHeaderProps={{ activeTab: 'trendAnalysis' }} />
            <div className="trend-mainWrapper">
                {
                    !showLoader &&
                    <div className="trend-main-content">
                        <div className="trend-menu">
                            <div className="trend-menu-item left">History</div>
                            <div className="trend-menu-item">Now</div>
                            <div className="trend-menu-item right">Prediction</div>
                        </div>
                        <div className="beta-description">
                            <div className="beta-tag">BETA</div>
                            <div className="beta-text">The prediction feature is currently in beta.</div>
                        </div>
                        {/* ----Menu Ending Here ------ */}
                        <div className="section-wrapper">
                            <div className="row mobile">
                                <div className="section a">
                                    <div className="section-title">World Trends</div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">The diet matrix</div>
                                        <div className="circle-button"><LeftArrow color='white' /></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">King ponf king pong ball toss</div>
                                        <div className="circle-button"><LeftArrow color='white' /></div>

                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                                        <div className="circle-button"><LeftArrow color='white' /></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                        <div className="circle-button"><LeftArrow color='white' /></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor sit.</div>
                                        <div className="circle-button"><LeftArrow color='white' /></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                        <div className="circle-button"><LeftArrow color='white' /></div>
                                    </div>
                                    <div className="section-footer">
                                        <LeftArrow color='#939393' />
                                        <ThreeDots color='red' style={{ margin: '0px 21px', height: '9px' }} />
                                        <RightArrow color='#939393' />
                                    </div>

                                </div>
                                <div className="section b">
                                    <div className="section-title">Local Trends - Kerala, India</div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">The diet matrix</div>
                                        <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">King ponf king pong ball toss</div>
                                        <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>

                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                                        <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                        <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor sit.</div>
                                        <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                    </div>
                                    <div className="section-item-a">
                                        <div className="dot"></div>
                                        <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                        <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                    </div>
                                    <div className="section-footer">
                                        <LeftArrow color='#939393' />
                                        <ThreeDots color='red' style={{ margin: '0px 21px', height: '9px' }} />
                                        <RightArrow color='#939393' />
                                    </div>

                                </div>
                            </div>
                            <div className="section c">
                                <div className="section-c-headers">
                                    <div className="title">Filter</div>
                                    <select id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>

                                    <select id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>

                                    <select id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="property-header">
                                    <div className="property a">Est Views</div>
                                    <div className="property b">Property</div>
                                </div>
                                <div className="section-item-a">
                                    <div className="dot"></div>
                                    <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                    <div className="property-a">25M</div>
                                    <div className="property-b">25M</div>
                                    <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                </div>
                                <div className="section-item-a">
                                    <div className="dot"></div>
                                    <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                    <div className="property-a">25M</div>
                                    <div className="property-b">25M</div>
                                    <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                </div>
                                <div className="section-item-a">
                                    <div className="dot"></div>
                                    <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                    <div className="property-a">25M</div>
                                    <div className="property-b">25M</div>
                                    <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                </div>
                                <div className="section-item-a">
                                    <div className="dot"></div>
                                    <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                    <div className="property-a">25M</div>
                                    <div className="property-b">25M</div>
                                    <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                </div>
                                <div className="section-item-a">
                                    <div className="dot"></div>
                                    <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                    <div className="property-a">25M</div>
                                    <div className="property-b">25M</div>
                                    <div className="project-button"><LeftArrow color='white' /><div className="text">Project</div></div>
                                </div>
                                <div className="section-footer">
                                    <LeftArrow color='#939393' />
                                    <ThreeDots color='red' style={{ margin: '0px 21px', height: '9px' }} />
                                    <RightArrow color='#939393' />
                                </div>
                            </div>

                        </div>
                    </div>
                }

                {
                    showLoader && <div className="loading-wrapper">
                        <TrendLoading className='trend-loading-logo' style={{ width: '257', height: '198px' }} />
                        <div className="trending-title">Please wait...</div>
                    </div>
                }
            </div>

        </>
    )
}

export default TrendHome