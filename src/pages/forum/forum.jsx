import React from 'react';
import './forum.scss';
import { PaginationNav } from 'carbon-components-react';
import SideNavBar from '../../components/SideNav/sidenav';
import ModalTile from '../../components/ModalTile/modaltile';

function Forum() {
  return (
    <div className='forum-app'>
        <SideNavBar/>
        <div className='forum-app__main'>
          <div className='forum-app__box'>
            <ModalTile/>
          </div>
          <div className='forum-app__box'>
            <ModalTile/>
          </div>
          <div className='forum-app__box'>
            <ModalTile/>
          </div>
          <div className='forum-app__box'>
            <ModalTile/>
          </div>
          <div className='forum-app__box'>
            <ModalTile/>
          <div className='forum-app__box'>
            <ModalTile/>
          </div>
          <div className='forum-app__box'>
            <PaginationNav/>
          </div>
        </div>
    </div>
  </div>
  );
}
export default Forum;