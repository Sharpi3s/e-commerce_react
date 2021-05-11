import { useRef } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../store/actions/userAction'
import { useHistory, Link } from "react-router-dom";
// import { createBrowserHistory } from 'history';

const SignIn = () => {

  const dispatch = useDispatch();
  // const history = createBrowserHistory();
  const history = useHistory()
  
  // const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const error = document.querySelector('.error')

  let email = useRef();
  let password = useRef();

  const signInUser = (e) => {
    e.preventDefault();
    if(email.current.calue !== '' && password.current.value !== '') {
      const user = {
        email: email.current.value,
        password: password.current.value
      }
      dispatch(signIn(user))
      history.goBack()
    } else {
      error.innerHTML = 'Email or password do not exist'
    }

  }

  // useEffect(() => {
  //   if(loggedIn) {
  //     history.push('/')
  //   }
  // }, [history, loggedIn])

  return (
    <div className="col-12 d-flex justify-content-center align-items-center height m-auto">
      
      <form className="col-4" onSubmit={signInUser}>
        <h2 className="mb-5">Sign In</h2>
        <div className="mb-4">
          <label className="form-label">Email address</label>
          <input type="email" id="form1Example1" className="form-control" ref={email} />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" id="form1Example2" className="form-control" ref={password} />
        </div>
        <div className="error text-danger"></div>
        <button type="submit" className="btn btn-pink btn-block mt-3 mb-5">Sign in</button>

        <p>Not a member? <Link className="text-dark pointer" to="/registernewuser"><u>Click here to register</u></Link></p>
      </form>
    </div>
  )
}

export default SignIn
