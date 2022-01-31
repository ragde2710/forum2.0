import React from 'react';
import './forum.scss';
import { ExpandableTile,
         TileAboveTheFoldContent,
         TileBelowTheFoldContent,
         TextInput, props } from 'carbon-components-react';
import SideNavBar from '../../components/SideNav/sidenav';

function Forum() {
  return (
    <div className='forum-app'>
        <SideNavBar/>
        <div className='forum-app__main'>
          <div className='forum-app__box'>
          <ExpandableTile>
            <TileAboveTheFoldContent>
              <div style={{ height: '120px' }}>Above the fold content here</div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '400px' }}>
                Below the fold content here
                <TextInput id="test2" invalidText="A valid value is required" />
              </div>
            </TileBelowTheFoldContent>
          </ExpandableTile>
          </div>
          <div className='forum-app__box'>
            2
          </div>
          <div className='forum-app__box'>
            3
          </div>
          <div className='forum-app__box'>
            4
          </div>
          <div className='forum-app__box'>
            5
          </div>
        </div>
    </div>
  );
}
export default Forum;