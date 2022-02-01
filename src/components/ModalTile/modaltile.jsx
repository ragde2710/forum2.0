import React from "react";
import './modaltile.scss';
import { ModalWrapper } from 'carbon-components-react'; 

function ModalTile() {
    return (
        <div className='modal-tile__main'>
            
            <div className="modal-tile__passive">
                <div class="modal-tile__passive--content">
                    <div className="modal-tile__passive--title">
                        <h3>Titulo de la falla</h3>
                    </div>
                    <div className="modal-tile__passive--description">
                        <p>Breve descripcion de la Falla</p>
                    </div>
                    <div className="modal-tile__passive--btn">
                    <ModalWrapper
                        buttonTriggerText="Ver Más"
                        modalHeading="Titulo de la Falla"
                        >
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Suspendisse cursus fermentum 
                        risus, sit amet fringilla nunc pellentesque quis. 
                        Duis quis odio ultrices, cursus lacus ac, posuere felis. 
                        Donec dignissim libero in augue mattis, a molestie metus 
                        vestibulum. 
                        </p>
                    </ModalWrapper>
                    </div>
                </div>
            </div>
            </div>
    );
}




export default ModalTile;