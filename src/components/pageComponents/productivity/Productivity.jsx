// import React, { useEffect, useState } from 'react'
import React from 'react'
import ProductivityStyledComponent from './style'
import AppHeader from '../../commonComponents/appheader/AppHeader'

const Productivity = () => {



    return (
        <ProductivityStyledComponent>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
        </ProductivityStyledComponent>
    )
}

export default Productivity