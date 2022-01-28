import React from "react";
import { Header, HeaderName, SideNav, SideNavMenu, SideNavMenuItem, SideNavItems, SideNavLink } from 'carbon-components-react';
import { Link } from "react-router-dom";


const HeaderM = () => {
    return(
        <Header aria-label="IBM Platform Name">
            <Link to= "/home ">
                <HeaderName href="#" prefix="IBM">
                    [Power Forum]
                </HeaderName>
            </Link>
        </Header>
    )
}

export default HeaderM;