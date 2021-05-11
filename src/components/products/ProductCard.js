import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product}) => {

  // const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-100">
        <Link to={`productdetails/${ product.id }`} className="bg-image hover-zoom">
          <img
            src={ product.img }
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="card-title">{ product.title }</h5>
          <div className="card-text">
            <strong className="h5">{ product.price }</strong>
          </div>
        </div>
        <div className="card-footer">
        <p>{ product.category }</p>
      </div>
      </div>
    </div>
  )
}

export default ProductCard