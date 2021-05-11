import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../store/actions/userAction'
import { useHistory } from "react-router-dom";


const Register = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  // const loggedIn = useSelector(state => state.userReducer.loggedIn)

  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();
  let error = document.querySelector('#error')
  error = ''

  const reset = () => {
    document.querySelector('#formReg').reset()
  }

  const register = (e) => {
    e.preventDefault();

    if(firstName.current.value !== '' && lastName.current.value !== '' && email.current.value !== '' && password.current.value !== '') {
      const newUser = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        createdAt: new Date(),
        admin: false
      }
      dispatch(registerUser(newUser))
      reset()
      history.goBack()
      console.log(newUser)

    } else {
      error.innerHTML = 'Every field must be filled in'
    }
  }
  // useEffect(() => {
  //   if(loggedIn) {
  //     history.push('/')
  //   }
  // }, [history, loggedIn])

  return (
      <div className="col-5 m-auto d-flex justify-content-center align-items-center height">
        <form onSubmit={register} id="formReg">
          <h2 className="mb-5">Register</h2>

          <div className="row mb-4">
            <div className="col">
              <div className="">
                <label className="form-label">First name</label>
                <input type="text" id="form3Example1" className="form-control" ref={firstName} />
              </div>
            </div>
            <div className="col">
              <div className="">
                <label className="form-label" >Last name</label>
                <input type="text" id="form3Example2" className="form-control" ref={lastName} />
              </div>
            </div>
          </div>

          <div className=" mb-4">
            <label className="form-label" >Email address</label>
            <input type="email" id="form3Example3" className="form-control" ref={email} />
          </div>


          <div className=" mb-5">
            <label className="form-label" >Password</label>
            <input type="password" id="form3Example4" className="form-control" ref={password} />
          </div>
          <small className="text-danger"><p id="error"></p></small>
          <button type="submit" className="btn btn-pink btn-block mt-4">Sign up</button>


        </form>
      </div>
  )
}

export default Register
