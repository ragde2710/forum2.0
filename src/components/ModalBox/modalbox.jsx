import React from 'react';
import './modalbox.scss';
import ModalTile from '../../components/ModalTile/modaltile';
import axios from 'axios';
import useGetProducts from '../../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=1';

const ModalBox = () => {
  const products = useGetProducts(API);
    return (
      <div className='modal-box__main'>
          <div className='modal_aporte'>
            {products.map(product => (
              <ModalTile
                product={product}
						    key={product.id}
              />
            ))}
          </div>
        </div>      
  );
}
export default ModalBox;