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
      // console.log('cleanup');
      dispatch(setProduct(null))
    }
  }, [dispatch, id])

  const product = useSelector(state => state.ProductReducer.product);
  console.log(product)
  // const loading = useSelector(state => state.postsReducer.loading);

  return (
    <div className="container my-5 pdBody">
      {
        product ? 

        <div className="d-md-flex justify-content-evenly">

          <div className=" col-md-6 col-lg-3 mb-4 mb-md-0">
            <div className="mb-0 img-pd">
            {/* <div className="col-6 col-mb-5 mb-0 img-pd"> */}
              <img className="card-img-top mb-3" src={ product.img } alt=""/>
            </div>
          </div>

          <div className="col-md-4 col-lg-5 col-xl-4">
            <div className="ms-2">
            {/* <div className="d-flex justify-content-between ms-4 mb-4"> */}
              <p className="mb-2 text-muted text-uppercase small">{ product.category }</p>
                
              <div className="d-lg-flex justify-content-between align-items-center">
                <h3>{ product.title }</h3>
                <h3><span className="me-2"><strong>${ product.price }</strong></span></h3>
              </div>
            </div>

              <div className="mt-4">
                <p className="ms-2"><strong>Color: </strong>{ product.color }</p>             
              </div>
              {/* <hr className="mb-4 ms-4"> */}
            
              {/* <table className="table table-sm table-borderless">
                <tbody>
                  <tr >
                    <td className="pl-0 pb-0 w-25">Quantity</td>
                    <td className="pb-0">Select size</td>
                  </tr>

                  <tr>
                    <td className="pl-0">
                      <div className="def-number-input number-input safari_only mb-0">
                        <input className="quantity" min="0" name="quantity" type="number" />
                      </div>
                    </td>

                    <td>
                      <div className="mt-1">
                        <div className="form-check form-check-inline pl-0" >
                          <input type="radio" className="form-check-input" id="small" value="Small" name="materialExampleRadios" />

                          <label className="form-check-label small text-uppercase card-link-secondary"
                            >Small</label>
                        </div>

                        <div className="form-check form-check-inline pl-0">
                          <input type="radio" className="form-check-input" id="medium" value="Medium" name="materialExampleRadios" />

                          <label className="form-check-label small text-uppercase card-link-secondary"
                            >Medium</label>
                        </div>

                        <div className="form-check form-check-inline pl-0">
                          <input type="radio" className="form-check-input" id="large" value="Large" name="materialExampleRadios" />

                          <label className="form-check-label small text-uppercase card-link-secondary"
                            >Large</label>
                        </div>
                      </div>
                    </td>
                  </tr>   
                </tbody>
              </table> */}

              <button type="button" className="btn btn-light btn-md ms-2 my-4" onClick={() => {
                dispatch(addToCart(product))
              }}>
                <i className="fas fa-shopping-bag pr-2 me-2"></i>Add to cart
              </button>

            {/* <hr className="mb-4 ms-4" /> */}
            <p className="pt-1 ms-2 my-3">{ product.desc }</p>
            
          </div>

        </div>


        : <h1>Loading...</h1>
      }

    </div>
  )
}

export default ProductDetails
