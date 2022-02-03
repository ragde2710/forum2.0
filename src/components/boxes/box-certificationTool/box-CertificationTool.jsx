import React from "react";
import { ArrowRight32 } from '@carbon/icons-react';

function BoxCertificationTool () {
    return(
        <div className='box'>
            <a href='https://certification-tool.dal1a.cirrus.ibm.com/#/login'>
                <div className='box-title'>
                    <h1>Certification Tool</h1>
                </div>
                <div className='box-content'>
                    <div className='context'>
                        <p>Certification tool for workers.</p>
                    </div>  
                    <div className='icon-container'>
                        <ArrowRight32 className='box-content--icon'/>
                    </div>
                </div>
            </a>
        </div>
        
    )
}
export default BoxCertificationTool;