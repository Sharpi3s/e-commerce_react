import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminEditOneUser from '../components/admin/AdminEditOneUser';
import { dateBuilder } from '../store/actions/orderActions'
import { checkUser } from '../store/actions/userAction'

const MyProfile = () => {
  const dispatch = useDispatch()
  let oneUser = useSelector(state => state.userReducer.buildUser)

  // const [show, setShow] = useState(false)
  const [showEditUser, setShowEditUser] = useState(false)
  const [update, setUpdate] = useState(false)
  // const [orderDetails, setOrderDetails] = useState(false)
  
  const editUser = () => {
    setShowEditUser(true)
  }

  const closeEdit = (id)  => {
    console.log('woop woop')
    setShowEditUser(false)
    setUpdate(true)
    dispatch(checkUser())
  }

  const exitEditUser = (id) => {
    setShowEditUser(false)
  }

  useEffect(() => {
    
    setShowEditUser()
    setUpdate()
    // setOrderDetails()

    console.log('Hämtar från db')
  }, [])



  return (
    <div className="container my-5 height">
      <h2 className="mb-5">My Profile</h2>
      {
        update ? 
          <div className="my-5 add-new-product col-3">You have updated your personal information</div>
        : ''
      }
      
      {
        oneUser ?
          <div className="d-flex justify-content-between">
            {

              !showEditUser ?
  
                <div className="shadow-1 p-4 rounded-1 d-flex justify-content-between align-items-start col-4">
                  
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

                  <div className="shadow-2 border pointer rounded p-2" onClick={() => editUser()}><i className="fas fa-pencil-alt fa-lg"></i></div>
                </div>
             
              : 
              <div>
                <AdminEditOneUser key={oneUser.id} oneUser={oneUser} closeEdit={closeEdit} exitEditUser={exitEditUser} />
              </div>
            }

          </div>
        : <div className="height">Loading...</div>
      }
    </div>
  )
}

export default MyProfile
