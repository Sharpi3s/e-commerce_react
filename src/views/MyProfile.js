import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminEditOneUser from '../components/admin/AdminEditOneUser';
import { dateBuilder } from '../store/actions/orderActions'
import { checkUser } from '../store/actions/userAction'
import { findOrders } from '../store/actions/orderActions';

const MyProfile = () => {
  const dispatch = useDispatch()
  let oneUser = useSelector(state => state.userReducer.buildUser)
  let sortedOrders = useSelector(state => state.orderReducer.sortedOrders)
 
  const [showEditUser, setShowEditUser] = useState(false)
  const [points, setPoints] = useState(null)

  let total = sortedOrders.map((order) => order.total)
  let _points = total.reduce((a, x) => a + x, 0)

  const editUser = () => {
    setShowEditUser(true)
  }

  const exitEditUser = (id) => {
    setShowEditUser(false)
    dispatch(checkUser())
  }

  useEffect(() => {
    if(oneUser) {
      dispatch(findOrders(oneUser.id))
      if(sortedOrders.length > 0) {
        setPoints(_points)
      }
    }
    
    setShowEditUser()

  }, [dispatch, oneUser, _points, sortedOrders.length])



  return (
    <div className="container my-5 height">
      <h2 className="mb-5">My Profile</h2>

      {
        oneUser ?
          <div className="d-flex justify-content-between align-items-start">
            {
              !showEditUser ?
                <div className="shadow-1 p-4 rounded-1 col-5">

                  <div className="d-flex justify-content-between align-items-start ">
                    <h3 className="mb-4">Your information</h3>
                    <div className="btn btn-light px-2" onClick={() => editUser()}><i className="fas fa-pencil-alt fa-lg"></i></div>
                  </div>
                  <div className="d-flex col-10">
                    <div className="col-6">
                      <p className="fw-bold me-5">Name</p>
                      <p className="fw-bold me-5">Email</p>
                      <p className="fw-bold me-5">Phone</p>
                      <p className="fw-bold me-5">Adress <br/> <br/> </p>
                      <br />
                      <p className="fw-bold me-5">Member since</p>
                    </div>
                    <div className="col-6">
                      <p>{ oneUser.firstName } { oneUser.lastName }</p>
                      <p>{ oneUser.email }</p>
                      <p>{ oneUser.number }</p>
                      <p className="">{ oneUser.adress } <br/>{ oneUser.postalCode }<br/>{ oneUser.city }</p>
                      <p>{ dispatch(dateBuilder(oneUser.createdAt)) }</p>
                    </div>
                  </div>  
                  
                </div>
             
              : 
              <div className="col-5">
                <AdminEditOneUser key={oneUser.id} oneUser={oneUser} exitEditUser={exitEditUser} />
              </div>
            }
            <div className="p-4 shadow-3 col-5">
              <h3 className="mb-4">Personal Offers</h3>
              <div className="bg-pink p-4 text-center mb-3">
                <h4 className="text-white">Get extra  points for shopping more environment friendly </h4>
              </div>
              <div className="bg-pink p-4 text-center my-4">
                <h4 className="text-white">3 for 2 on tops</h4> 
                <p className="text-white">25 June - 20 July 2021</p>
              </div>
              <div className="bg-pink p-4 text-center">
                <h4 className="text-white">{ points } total points</h4> 
                <p className="text-white mb-0">You get 1 point for each 1$ you shop for. </p>
                <p className="text-white">Collect points and get a check to use in our shop!</p>
                {/* <p className="text-white">474 points left for next bonus check</p> */}
              </div>
            </div>

          </div>
        : <div className="height">Loading...</div>
      }
    </div>
  )
}

export default MyProfile
