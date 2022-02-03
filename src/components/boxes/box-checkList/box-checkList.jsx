import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight32 } from '@carbon/icons-react';

function BoxCheckList () {
    return(
        <div className='box'>
            <Link to="/checklist">
                <div className='box-title'>
                    <h1>Checklist</h1>
                </div>
                <div className='box-content'>
                    <div className='context'>
                        <p>Web Tool for check correct FAB replacement and validate quality specs.</p>
                    </div>
                    <div className='icon-container'>
                        <ArrowRight32 className='box-content--icon'/>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default BoxCheckList;