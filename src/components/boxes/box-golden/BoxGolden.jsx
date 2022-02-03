import React from "react";
import { ArrowRight32 } from '@carbon/icons-react';
import { Link } from "react-router-dom";

function BoxGolden () {
    return(
        <div className='box'>
            <Link to="/golden">
                <div className='box-title'>
                    <h1>Golden Systems</h1>
                </div>
                <div className='box-content'>
                    <div className='context'>
                        <p>Inventary for Golden System and parts.</p>
                    </div>  
                    <div className='icon-container'>
                        <ArrowRight32 className='box-content--icon'/>
                    </div>
                </div> 
            </Link>
        </div>    
    )
}
export default BoxGolden;