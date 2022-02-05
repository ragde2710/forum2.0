import React from "react";
import './sidenav.scss';
import { SideNav, SideNavMenu, SideNavMenuItem, SideNavItems, SideNavLink } from "carbon-components-react";
import { Link } from "react-router-dom";


function SideNavBar() {
    return (
      <div className='main-sidenav'>
        <SideNav      
          isFixedNav expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation">
          <SideNavItems>
  
            <SideNavMenu title="Fallas Comunes">
              <SideNavMenuItem>
                <Link to="/SRCs">Glosario SRC'S</Link>
              </SideNavMenuItem>
              <SideNavMenuItem>
                <Link to="/WorkArounds">WorkAround's</Link>
              </SideNavMenuItem>
              <SideNavMenuItem>
                <Link to="/EngInst">Aportes de Ingenieria</Link>
              </SideNavMenuItem>
            </SideNavMenu>
  
            <SideNavMenu title="Manuals">
              <SideNavMenuItem>ZZ2/ZZ4/ZZ Tower</SideNavMenuItem>
              <SideNavMenuItem>Open Power</SideNavMenuItem>
              <SideNavMenuItem>Fleetwood/Denali/Brazo</SideNavMenuItem>
            </SideNavMenu>
  
            <SideNavLink>
              <Link to="/alerts">Avisos</Link>
            </SideNavLink>
  
            <SideNavLink>
              <Link to="/pcms">PCMs</Link>
            </SideNavLink>
  
          </SideNavItems>
        </SideNav>
        </div>
  );
}
export default SideNavBar;