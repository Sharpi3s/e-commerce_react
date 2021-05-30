import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {registerUser } from '../store/actions/userAction'

const RegisterNewUser = () => {

  const dispatch = useDispatch()

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    adress: "",
    postalCode: "",
    city: "",
    country: "",
    password: ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleFirstName = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastName = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleEmail = (e) => {
    setValues({...values, email: e.target.value})
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
  const handlePassword = (e) => {
    setValues({...values, password: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email && values.number && values.adress && values.postalCode && values.city && values.country && values.password) {
      setValid(true)

      let newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        number: values.number,
        adress: values.adress,
        postalCode: values.postalCode,
        city: values.city,
        country: values.country,
        password: values.password
      }

      console.log(newUser)
      dispatch(registerUser(newUser))
      console.log('Yeeey')
      setValues({...values, firstName: "", lastName: "", email: "", number: "", adress: "", postalCode: "", city: ""})
    }
    else {
      console.log('error')
    }
    setSubmitted(true)
      
  }

  return (
    <div className="mt-5 m-auto d-flex justify-content-center align-items-center">
    {
      submitted && valid ? 
      <div className="height mt-5">
        <div className="headlineAdd text-center col-8 m-auto mt-5 p-3">
          <h1>Thank you for signing up to our store! </h1>
        </div>
      </div>
      :
      <form className="col-12 col-md-10 col-lg-4 m-auto p-3 mb-5 shadow-1" id="formReg" onSubmit={handleSubmit}>
        <div className="text-center ">
          <h2 className="m-auto mb-5 pb-2 add-new-product col-7">Register</h2>
        </div>
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
              {submitted && !values.firstName ? <span>Please enter a name</span> : null}
              
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
              {submitted && !values.lastName ? <span>Please enter a last name</span> : null}
              
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Email</label>
            <input 
              onChange={handleEmail}
              type="email" 
              id="email" 
              className="form-control" 
              value={values.email} />
            {submitted && !values.email ? <span>Please enter a valid email</span> : null}
          </div>
          <div className="col">
            <label className="form-label">Number</label>
            <input 
              onChange={handleNumber}
              type="number" 
              id="number" 
              className="form-control" 
              value={values.number} />
            {submitted && !values.number ? <span>Please enter a number</span> : null}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={handlePassword}
            type="password" 
            id="password" 
            className="form-control" 
            value={values.password} />
          {submitted && !values.password ? <span>Please enter a adress</span> : null}
        </div>

        <div className="row mb-3">
          
          <div className="col-6">
            <label className="form-label">Adress</label>
            <input
              onChange={handleAdress}
              type="text" 
              id="adress" 
              className="form-control" 
              value={values.adress} />
            {submitted && !values.adress ? <span>Please enter a adress</span> : null}
          </div>

          <div className="col-6">
            <label className="form-label">Postal Code</label>
            <input 
              onChange={handlePostalCode}
              type="number" 
              id="postalCode" 
              className="form-control" 
              value={values.postalCode} />
            {submitted && !values.postalCode ? <span>Please enter a postal code</span> : null}
          </div>

        </div>
        <div className="row mb-5">
          <div className="col-6">
            <label className="form-label">City</label>
            <input 
              onChange={handleCity}
              type="text" 
              id="city" 
              className="form-control" 
              value={values.city} />
            {submitted && !values.city ? <span>Please enter a city</span> : null}
          </div>

          <div className="col-6">
            <label className="form-label">Country</label>
            <input 
              onChange={handleCountry}
              type="text" 
              id="country" 
              className="form-control" 
              value={values.country} />
            {submitted && !values.country ? <span>Please enter a country</span> : null}
          </div>
        </div>

        <div className="m-auto">
            <button type="submit" className="btn btn-pink btn-block mb-4 text-white">Submit</button>
        </div>

      </form>
    }
    </div>
  )
}

export default RegisterNewUser
