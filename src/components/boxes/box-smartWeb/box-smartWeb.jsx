import React from "react";
import { ArrowRight32 } from '@carbon/icons-react';

function BoxSmartWeb () {
    return(
        <div className='box'>
            <a href='http://smweb.gdl.mex.ibm.com:9080/Smart_Web/login.jsp?id=3621&error=fail&redirect=SMDashboards.jsp'>
                <div className='box-title'>
                    <h1>Smart Web</h1>
                </div>
                <div className='box-content'>
                <div className='context'>
                    <p>Smart Web Description.</p>
                </div>  
                <div className='icon-container'>
                    <ArrowRight32 className='box-content--icon'/>
                </div>
                </div>
            </a>
        </div>
    )
}
export default BoxSmartWeb;