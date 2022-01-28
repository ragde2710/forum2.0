import React from "react";
import './header.scss';
import '../../'
import { Header, HeaderName} from "carbon-components-react";


function HeaderBar() {
    return (
      <div className='app-header'>
        <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix="IBM">
            [Power Forum]
        </HeaderName>
        </Header>
    </div>
    );
}
export default HeaderBar;