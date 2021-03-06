import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserOrder from '../components/orders/UserOrder';
import { findOrders } from '../store/actions/orderActions';

const MyOrders = () => {

  let oneUser = useSelector(state => state.userReducer.oneUser)
  let sortedOrders = useSelector(state => state.orderReducer.sortedOrders)

  let id 

  const dispatch = useDispatch()

  const sort = () => {
    if(oneUser) {
      let uid = oneUser.uid
      id = uid
    }
  }

  sort()

  useEffect(() => {
    dispatch(findOrders(id))
  }, [dispatch, id])

  return (
    <div className="container my-5 oBody">
      
      <div className="d-flex justify-content-between">
        
        <div className="col-10">
          <h2>MY ORDERS</h2>
          <p className="mb-5">Select one order for more details.</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Order Nr</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Shipped</th>
                  <th scope="col">Delivered</th>
                </tr>
              </thead>
              <tbody>
              {
                sortedOrders && sortedOrders.map(order => (
                  <UserOrder key={order.id} order={order} />
                ))
              }
              </tbody>
            </table>
        </div>

        <div>

        </div>

      </div>

    </div>
  )
}

export default MyOrders
