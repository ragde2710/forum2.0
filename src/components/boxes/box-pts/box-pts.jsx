import React from "react";
import { ArrowRight32 } from '@carbon/icons-react';

function BoxPTS () {
    return(
        <div className='box'>
            <a href='http://powertest.gdl.mex.ibm.com/users/login/?next=/'>
                <div className='box-title'>
                    <h1>PTS</h1>
                </div>
                <div className='box-content'>
                    <div className='context'>
                        <p>Part tracking system.</p>
                    </div>  
                    <div className='icon-container'>
                        <ArrowRight32 className='box-content--icon'/>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default BoxPTS;