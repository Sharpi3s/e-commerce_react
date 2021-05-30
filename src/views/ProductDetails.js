import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, setProduct } from '../store/actions/ProductCatalogActions'
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/actions/cartActions'

const ProductDetails = () => {

  const id = useParams().id
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getOneProduct(id))
    return () => {
      dispatch(setProduct(null))
    }
  }, [dispatch, id])

  const product = useSelector(state => state.ProductReducer.product);

  return (
    <div className="container my-5 pdBody">
      {
        product ? 

        <div className="d-md-flex justify-content-evenly">

          <div className=" col-md-6 col-lg-3 mb-4 mb-md-0">
            <div className="mb-0 img-pd">
              <img className="card-img-top mb-3" src={ product.img } alt=""/>
            </div>
          </div>

          <div className="col-md-4 col-lg-5 col-xl-4">
            <div className="ms-2">
              <p className="mb-2 text-muted text-uppercase small">{ product.category }</p>
                
              <div className="d-lg-flex justify-content-between align-items-center">
                <h3>{ product.title }</h3>
                <h3><span className="me-2"><strong>${ product.price }</strong></span></h3>
              </div>
            </div>

              <div className="mt-4">
                <p className="ms-2"><strong>Color: </strong>{ product.color }</p>             
              </div>

              <button type="button" className="btn btn-light btn-md ms-2 my-4" onClick={() => {
                dispatch(addToCart(product))
              }}>
                <i className="fas fa-shopping-bag pr-2 me-2"></i>Add to cart
              </button>
            <p className="pt-1 ms-2 my-3">{ product.desc }</p>
            
          </div>

        </div>

        : <h1>Loading...</h1>
      }

    </div>
  )
}

export default ProductDetails
