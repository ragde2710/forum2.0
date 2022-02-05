import React from "react";
import { Header,
         HeaderName,
         HeaderGlobalBar,
         HeaderGlobalAction} from "carbon-components-react";
import { Search20, AppSwitcher20, Notification20 } from '@carbon/icons-react';

function HeaderBarBox(){
    return (
      <div className='app-header'>
        <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix="IBM">
            [Power Forum]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={('app-switcher click')}
            tooltipAlignment="end">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        </Header>
    </div>
    );
}
export default HeaderBarBox;