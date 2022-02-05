import React from "react";
import './modaltile.scss';
import { ModalWrapper } from 'carbon-components-react'; 

const ModalTile = ({ product }) => {
    return (
        <div className='modal-tile__main'>
            <div className="modal-tile__passive">
                <div class="modal-tile__passive--content">
                    <div className="modal-tile__passive--title">
                        <h3>{product.title}</h3>
                    </div>
                    <div className="modal-tile__passive--description">
                        <p>{product.description}</p>
                    </div>
                    <div className="modal-tile__passive--btn">
                    <ModalWrapper
                        buttonTriggerText="Ver Más..."
                        modalHeading={product.title}
                        >
                        <div className="modal-tile__active--header">
                            <div className="modal-tile__active--header-box">
                                <p>{product.title}</p>
                            </div>
                            <div className="modal-tile__active--header-box">
                                <p>{product.price}</p> 
                            </div>
                        </div>
                        <div className="modal-tile__active--content">
                        <img src = {product.images[1]}/>
                        </div>
                    </ModalWrapper>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default ModalTile;