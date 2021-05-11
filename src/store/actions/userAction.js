import actiontypes from '../actiontypes';
import db from '../../db/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'; 
import 'firebase/firestore';

export const registerUser = (newUser) => {

  return dispatch => {
    console.log(newUser)

    firebase.auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((cred) => {
        console.log('success', cred)

        return db.collection('users').doc(cred.user.uid).set({
        // db.collection('users').doc(cred.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          adress: newUser.adress,
          postalCode: newUser.postalCode,
          city: newUser.city,
          country: newUser.country,
          number: newUser.number,
          createdAt: Date.now(),
          admin: false
        });
      })

    .catch(err => console.log(err))

  }
}

export const signIn = (user) => {

  return dispatch => {
    
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(user => {
      dispatch(setUser(user))
    })
    .catch(err => {
      console.log('error', err)
    });
  }
}


export const loggedOut = () => {
  return dispatch => {
    firebase.auth().signOut().then(() => {
      // dispatch(setUser(null))
      // dispatch(compiled(null))
      console.log('You signed out')
    })
    .catch(err => {
      console.log('error', err)
    });
  }
}

export const setUser = user => {
  return {
    type: actiontypes().users.setUser,
    payload: user
  }
}

export const checkUser = () => {
  return dispatch => {

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log('You are loggedin as ' + user.email)
        dispatch(loggedIn(true))
        dispatch(oneUser(user))
        dispatch(compiled(user.uid, user.email))
        // dispatch(buildUser(user))
      } else {
        console.log('No one has signed in')
        dispatch(loggedIn(false))
        dispatch(oneUser(null))
        // dispatch(compiled(null))
      }
    })
  }
}

export const loggedIn = (data) => {
  return {
    type: actiontypes().users.loggedIn,
    payload: data
  }
}
export const oneUser = (user) => {
  return {
    type: actiontypes().users.oneUser,
    payload: user
  }
}

export const compiled = (id, email) => {
  return dispatch => {
    db.collection('users').doc(id).get().then(user => {
      // console.log(user)
      const data = {
        id: id,
        email: email,
        firstName: user.data().firstName,
        lastName: user.data().lastName,
        adress: user.data().adress,
        postalCode: user.data().postalCode,
        city: user.data().city,
        country: user.data().country,
        number: user.data().number,
        createdAt: user.data().createdAt,
        admin: user.data().admin
        // 'firstName': user.data().firstName,
        // 'lastName': user.data().lastName,
        // 'admin': user.data().admin
      }
      dispatch(buildUser(data))
      dispatch(admin(data.admin))
    })
  }
}

export const buildUser = (data) => {
  console.log(data)
  return {
    type: actiontypes().users.buildUser,
    payload: data
  }
}
export const admin = (data) => {
  // console.log(data)
  return {
    type: actiontypes().users.admin,
    payload: data
  }
}

export const getOneUser = (id) => {
  return dispatch => {
  
    db.collection('users').doc(id).get().then(user => {
    
      const data = {
        id: id,
        email: user.data().email,
        firstName: user.data().firstName,
        lastName: user.data().lastName,
        adress: user.data().adress,
        postalCode: user.data().postalCode,
        city: user.data().city,
        country: user.data().country,
        number: user.data().number,
        createdAt: user.data().createdAt,
        admin: user.data().admin
      }
        dispatch(setGetOneUser(data))
      })
  }
}

export const setGetOneUser = (data) => {
  return {
    type: actiontypes().users.user,
    payload: data
  }
}


export const getUsers = () => {
  return dispatch => {
    let array = []

    db.collection('users').get().then(SnappShot => {
      SnappShot.forEach(user => {

        const data = {
          id: user.id,
          email: user.data().email,
          firstName: user.data().firstName,
          lastName: user.data().lastName,
          adress: user.data().adress,
          postalCodeCode: user.data().postalCode,
          city: user.data().city,
          country: user.data().country,
          number: user.data().number,
          createdAt: user.data().createdAt,
          admin: user.data().admin
        }
        // console.log(data)
        array.push(data)
      })

      dispatch(setUsers(array))
      // dispatch(setOrders(array))
      // dispatch(productsReverse())
    })
  }
}

export const setUsers = users => {
  // let byDate = users.sort((a, b) => b.createdAt - a.createdAt)
  return {
    type: actiontypes().users.users,
    payload: users
    // payload: orders.reverse()
  }
}


export const updateUser = (update) => {

  // let updatedUser = {

  //   firstName: update.firstName,
  //   lastName: update.lastName,
  //   number: update.number,
  //   adress: update.adress,
  //   postalCodeCode: update.postalCode,
  //   city: update.city,
  //   country: update.country,

  // }

  return dispatch => {
    // console.log(updatedUser)
    console.log(update.id)
    // console.log(updatedUser)
    // console.log('hej')
    db.collection('users').doc(update.id).update({
      firstName: update.firstName,
      lastName: update.lastName,
      number: update.number,
      adress: update.adress,
      postalCode: update.postalCode,
      city: update.city,
      country: update.country,
    })
    .then(res => { 
      console.log(res)
      console.log('success')
      // dispatch(addNewProduct())
      // dispatch(test())
    })
    .catch(err => console.log(err))
  }
}
