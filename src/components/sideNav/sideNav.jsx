import React from "react";
import { Routes, Route, Link, useRoutes, useParams } from "react-router-dom";
import { Header, HeaderName, SideNav, SideNavMenu, SideNavMenuItem, SideNavItems, SideNavLink } from 'carbon-components-react';





const SideNavM = () => {    
    return (
      <SideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems>
          <SideNavMenu title="Fallas Comunes">
            <SideNavMenuItem href="javascript:void(0)">
                <Link to="fallasComunes/glosarioSRCs">Glosario SRC'S</Link>
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
                <Link to="fallasComunes/workArounds">WorkAround's</Link>
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              <Link to="fallasComunes/aportesDeIngenieria">Aportes de Ingenieria</Link>
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Sistemas Golden">
              <SideNavMenuItem href="/puto">Denali/FleetWood</SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Tuleta/ZZ/Zeppellin</SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Partes Golden</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Manuals">
              <SideNavMenuItem href="javascript:void(0)">ZZ2/ZZ4/ZZ Tower</SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Open Power</SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Fleetwood/Denali/Brazo</SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink href="javascript:void(0)">Avisos</SideNavLink>
          <SideNavLink href="javascript:void(0)">PCM'S</SideNavLink>
        </SideNavItems>
      </SideNav>
    )
} 

export default SideNavM;