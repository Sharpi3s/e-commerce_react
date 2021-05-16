import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, setOrder } from '../store/actions/orderActions'
import { getOneUser } from '../store/actions/userAction'
import OrderProducts from '../components/orders/OrderProducts';
import { dateBuilder } from '../store/actions/orderActions'

const UserOrderDetails = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  let oneUser = useSelector(state => state.userReducer.oneUser)
  let uid

  const sort = () => {
    if(oneUser) {
      let _uid = oneUser.uid
      uid = _uid
    }
  }
  sort()

  useEffect(() => {
    dispatch(getOrder(id))
    if(uid)
    dispatch(getOneUser(uid))
    
    return () => {
      dispatch(setOrder(null)) 
    }
  }, [dispatch,uid, id])

  const order = useSelector(state => state.orderReducer.order);
  let user = useSelector(state => state.userReducer.user);

  return (
    <div className="container my-5">
     {
       order && user ? 
      <div className="height-order">
         <h2 className="mb-5">Order: { order.id }</h2>

        <div className="d-md-flex">

            <div className="col-12 col-md-6 col-lg-4 mb-5">
      
              <div className="mb-3">
                <h5>Name</h5>
                <p className="text-muted">{ user.firstName } { user.lastName }</p>
              </div>
              <div className="mb-3">
                <h5>Email</h5>
                <p className="text-muted">{ order.email }</p>
              </div>
              
              <div className="mb-3">
                <h5 className="text-muted">Order date</h5>
                <p className="text-muted">{ dispatch(dateBuilder(order.createdAt)) }</p>
              </div>

              <div className="mb-3">
                <h5>Total amount</h5>
                <h5 className="text-muted">$ { order.total }</h5>
              </div>
                  
            </div>
            <div className="col-10 col-md-4">
              <h5>Products</h5>
              <div className="d-flex justify-content-between col-12">
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
              <div>
              {
                order.cart ? 

                order.cart.map(product => (
                  <OrderProducts key={product.id} product={product} />
                ))
                : <h3>No products</h3>
              }
              </div>

            </div>

            
          </div>
      </div>

       : <div className="height">Loading...</div>
     }
    </div>
  )
}

export default UserOrderDetails
