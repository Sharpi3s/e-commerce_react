import { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from "react-router-dom";
// import { useDispatch } from 'react-redux'
// import { signIn } from '../store/actions/userAction'
import firebase from 'firebase/app'
import 'firebase/auth'; 

const SignIn = () => {
  // const dispatch = useDispatch();
  const history = useHistory()
  
  const loggedIn = useSelector(state => state.userReducer.loggedIn)

  const [err, setErr] = useState('')

  let email = useRef();
  let password = useRef();


  const handleSubmit = (async (e) => {
    e.preventDefault();
    if(email.current.value !== '' && password.current.value !== '') {
      try {
        await firebase.auth().signInWithEmailAndPassword(email.current.value, password.current.value)
      }
      catch (err) {
        console.log(err)
        setErr('Email or password do not exist')
      }
    } else {
      setErr('You must enter email and password to sign in.')
    }
  })

  /* Login funktion som gör en dispatch mot userAction login */

  // const signInUser = (e) => {
  //   e.preventDefault();
  //   if(email.current.value !== '' && password.current.value !== '') {
  //     try {
  //       const user = {
  //         email: email.current.value,
  //         password: password.current.value
  //       }
  //       dispatch(signIn(user))
  //     }
  //     catch {
  //       console.log('password or email do not exist')
  //       setErr('Email or password do not exist')
  //     }
  //   } 
  //   else {
  //     setErr('You must enter email and password to sign in.')
  //   }
  // }

  useEffect(() => {
    if(loggedIn) {
      setErr('')
      history.goBack()
      console.log('Logged in')
    }

    console.log(loggedIn)
  }, [loggedIn, history, err])

  return (
    <div className="col-12 d-flex justify-content-center align-items-center height m-auto">
      
      <form className="col-4" onSubmit={handleSubmit}>
        <h2 className="mb-5">Sign In</h2>
        <div className="mb-4">
          <label className="form-label">Email address</label>
          <input type="email" id="form1Example1" className="form-control" ref={email} />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" id="form1Example2" className="form-control" ref={password} />
        </div>


        <div className="error text-danger">{ err }</div>


        <button type="submit" className="btn btn-pink btn-block mt-3 mb-5">Sign in</button>

        <p>Not a member? <Link className="text-dark pointer" to="/registernewuser"><u>Click here to register</u></Link></p>
      </form>
    </div>
  )
}

export default SignIn
