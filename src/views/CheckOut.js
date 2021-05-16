import { useEffect } from 'react';
import { getLastOrder } from '../store/actions/orderActions'
import { useDispatch, useSelector } from 'react-redux';
import { dateBuilder } from '../store/actions/orderActions'

const CheckOut = () => {

  const dispatch = useDispatch()
  let user = useSelector(state => state.userReducer.buildUser)
  let order = useSelector(state => state.orderReducer.lastOrder)

  let delivery = 6


  useEffect(() => {
    if(user) {
      dispatch(getLastOrder(user.id))
    }

    console.log('Hämtar från db')
  }, [dispatch, user])



  return (
    <div className="container my-5">

      {
        order ? 
        <div className="">
          <div className="col-7 m-auto">

            <div className="my-5 text-center">
              <h2 className="mb-5 pt-4">Thanks for your order!</h2>
              <h5>We'll be in touch soon to let you <br />know when your order has been shipped. </h5>
              <h5>Your confirmation will be sent to <span className="text-decoration-underline">{ user.email }</span>.  <br />Below is your order details.</h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between m-auto col-8 py-4">
              <div>
                <div>
                  <p className="text-muted mb-0">Order number</p>
                  <p><strong>{ order.id }</strong></p>
                </div>
                <div>
                  <p className="text-muted mb-0">Order date</p>
                  <p><strong>{ dispatch(dateBuilder(order.createdAt)) }</strong></p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-muted mb-0">Name</p>
                  <p><strong>{ user.firstName } { user.lastName }</strong></p>
                </div>
                <div>
                  <p className="text-muted mb-0">Email</p>
                  <p><strong>{ user.email }</strong></p>
                </div>
              </div>
              <div>
                <p className="text-muted mb-0">Delivery to</p>
                <p><strong>{ user.adress } <br/>{ user.postalCode }<br/>{ user.city }</strong> </p>
              </div>
            </div>
            <hr />
            <div className="col-8 m-auto my-5">
              {/* <hr className="mt-0" /> */}
              <div className="d-flex justify-content-between col-12 px-3">
                <div className="col-2 ps-2">
                <i className="fas fa-camera"></i>
                </div>
                <div className="d-flex justify-content-between col-10 align-items-center">
                  <p className="col-6 fw-bold">Name</p>
                  <p className="col-3 fw-bold">Quantity</p>
                  <p className="fw-bold">Total</p>
                </div>
              </div>
              <hr className="mt-0" />

              {
                order.cart && order.cart.map(product => (
                  <div className="" key={product.id} product={product}>
                    <div className="d-flex justify-content-between col-12 mb-3 border-bottom pb-3">
                      <div className="col-2 px-3">
                        <img id="orderImg" src={ product.img } alt="" />
                      </div>
                      <div className="d-flex justify-content-between col-10 align-items-center px-3">
                        <p className="col-6">{ product.title }</p>
                        <p className="col-3"> { product.quantity }</p>
                        <p>$ { product.price }</p>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
            <hr />
            <div className="pt-3 d-flex flex-column align-items-end m-auto col-8">
          
              <div className="col-4 ">
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Products total</h6>
                  <h6 className="text-muted">$ { order.total - delivery }</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Delivery</h6>
                  <h6 className="text-muted">$ { delivery }</h6>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-4">
                  <h4>TOTAL</h4>
                  <h4>$ { order.total }</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
        : <div className="height">Loading...</div>
      }

    </div>
  )
}

export default CheckOut
