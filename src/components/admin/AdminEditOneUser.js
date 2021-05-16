import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/actions/userAction'

const AdminEditOneUser = ({oneUser, exitEditUser}) => {

  const dispatch = useDispatch()

  const [update, setUpdate] = useState(false)

  const [values, setValues] = useState({
    firstName: oneUser.firstName,
    lastName: oneUser.lastName,
    number: oneUser.number,
    adress: oneUser.adress,
    postalCode: oneUser.postalCode,
    city: oneUser.city,
    country: oneUser.country,
  })

  const handleFirstName = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastName = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleNumber = (e) => {
    setValues({...values, number: parseInt(e.target.value)})
  }

  const handleAdress = (e) => {
    setValues({...values, adress: e.target.value})
  }

  const handlePostalCode = (e) => {
    setValues({...values, postalCode: parseInt(e.target.value)})
  }

  const handleCity = (e) => {
    setValues({...values, city: e.target.value})
  }

  const handleCountry = (e) => {
    setValues({...values, country: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

      let editedUser = {
        id: oneUser.id,
        firstName: values.firstName,
        lastName: values.lastName,
        number: values.number,
        adress: values.adress,
        postalCode: values.postalCode,
        city: values.city,
        country: values.country,
      }

      dispatch(updateUser(editedUser))
      // closeEdit(oneUser.id)  
      setUpdate(true)
  }

  return (
    <div>
     {
       oneUser ? 
       <div className="m-auto d-flex justify-content-center align-items-center">

         <form className="col-12 m-auto p-3 mb-5 shadow-1" id="formReg" >
           <div className="d-flex justify-content-between align-items-center mb-4">
             <h4 className=" pb-2 add-new-product col-4">Update User</h4>
             <button type="button" className="btn btn-light px-3" onClick={() => exitEditUser(oneUser.id)}><i className="fas fa-times fa-lg"></i></button>
           </div>
           {
              update ? 
                <div className="mb-3 add-new-product col-8">You have updated your personal information</div>
              : ''
            }
           <div className="row mb-3">
             <div className="col-6">
               <div className="col">
                 <label className="form-label">First Name</label>
                 <input 
                   onChange={handleFirstName}
                   type="text" 
                   id="firstName" 
                   className="form-control" 
                   value={values.firstName} />
               </div>
             </div>
             <div className="col-6">
               <div className="col">
                 <label className="form-label">Last Name</label>
                 <input 
                   onChange={handleLastName}
                   type="text" 
                   id="lastName" 
                   className="form-control" 
                   value={values.lastName} />
               </div>
             </div>
           </div>
   
           <div className="row mb-3">

             <div className="col-6">
               <label className="form-label">Number</label>
               <input 
                 onChange={handleNumber}
                 type="number" 
                 id="number" 
                 className="form-control" 
                 value={values.number} />
             </div>
             <div className="col-6">
               <label className="form-label">Adress</label>
               <input
                 onChange={handleAdress}
                 type="text" 
                 id="adress" 
                 className="form-control" 
                 value={values.adress} />
             </div>
           </div>
   
           <div className="row mb-3">
             
            <div className="col-6">
              <label className="form-label">Postal Code</label>
              <input 
                onChange={handlePostalCode}
                type="number" 
                id="postalCode" 
                className="form-control" 
                value={values.postalCode} />
            </div>
            <div className="col-6">
               <label className="form-label">City</label>
               <input 
                 onChange={handleCity}
                 type="text" 
                 id="city" 
                 className="form-control" 
                 value={values.city} />
             </div>
            
           </div>
           <div className="row mb-5">

             <div className="col-6">
               <label className="form-label">Country</label>
               <input 
                 onChange={handleCountry}
                 type="text" 
                 id="country" 
                 className="form-control" 
                 value={values.country} />
             </div>
             <div className=" mb-0 d-flex align-items-end col-6">
               <button type="button" className="btn btn-pink btn-block text-white" onClick={handleSubmit}>Update</button>
             </div>
   
           </div>

         </form>
       
       </div>
        : 
        <div>NO USER </div>
     }
    </div>
  )
}

export default AdminEditOneUser
