import './App.scss';
import { 
  Header, 
  HeaderName,
  SideNav,
  SideNavMenu,
  SideNavMenuItem,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react';

function App() {
  return (
    <div className='app'>

      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Power Forum]
        </HeaderName>
      </Header>

      <SideNav      
        isFixedNav expanded={true}
      isChildOfHeader={false}
      aria-label="Side navigation">
        <SideNavItems>

          <SideNavMenu title="Fallas Comunes">
            <SideNavMenuItem href="javascript:void(0)">Glosario SRC'S</SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">WorkAround's</SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Aportes de Ingenieria</SideNavMenuItem>
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

          <SideNavLink href="javascript:void(0)">
              Avisos
          </SideNavLink>

          <SideNavLink href="javascript:void(0)">
              PCM'S
          </SideNavLink>

        </SideNavItems>
      </SideNav>

      <div className='landing-page-content'>
      
      <div className='box'>
        <h1>Power Systems</h1>
      </div>

      <div className='box'>
        <h1>Life at IBM</h1>
      </div>

      </div>
    </div>
  );
}

export default App;
