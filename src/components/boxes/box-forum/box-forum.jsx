import React from "react";
import { ArrowRight32 } from '@carbon/icons-react';
import { Link } from "react-router-dom";


function BoxForum () {
    return(
        <div className='box'>
            <Link to="/forum">
                <div className='box-title'>
                    <h1>Forum</h1>
                </div>
                <div className='box-content'>
                    <div className='context'>
                        <p>Forum where you will found information about srcs and more documentation to help for debugging.</p>
                    </div>
                    <div className='icon-container'>
                        <ArrowRight32 className='box-content--icon'/>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default BoxForum;