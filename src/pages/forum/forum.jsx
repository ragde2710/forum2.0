import React from 'react';
import './forum.scss';
import { PaginationNav } from 'carbon-components-react';
import SideNavBar from '../../components/SideNav/sidenav';
import ModalTile from '../../components/ModalTile/modaltile';

function Forum() {
  return (
    <div className='forum-app'>
        <SideNavBar/>
    </div>
  );
}
export default Forum;