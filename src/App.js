import React from 'react';
import './App.scss';
import BoxCheckList from './components/boxes/box-checkList/box-checkList';
import BoxPTS from './components/boxes/box-pts/box-pts';
import BoxForum from './components/boxes/box-forum/box-forum';
import BoxCertificationTool from './components/boxes/box-certificationTool/box-CertificationTool';
import BoxSmartWeb from './components/boxes/box-smartWeb/box-smartWeb';
import BoxGolden from './components/boxes/box-golden/BoxGolden';

function App() {
    return (
        <div className='app'>
            <div className='landing-page-content'>
                <BoxCheckList/>
                <BoxPTS/>   
                <BoxForum/>
                <BoxCertificationTool/>
                <BoxSmartWeb/>
                <BoxGolden/>
            </div>
        </div>
    );
}

export default App;