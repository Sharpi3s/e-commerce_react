import actiontypes from '../actiontypes'
// import { useSelector } from 'react-redux'
import db from '../../db/firebase.js'

export const addOrder = (data) => {
  let newOrder = {
    userId: data.user.id,
    email: data.user.email,
    cart: data.cart,
    total: data.total,
    createdAt: Date.now(),
    delivered: false,
    shipping: false
  }
  // console.log(newOrder)
  return dispatch => {
    db.collection('orders').add(newOrder)
    .then(res => { 
      console.log('success')
      
      dispatch(EmptyCart())
      // dispatch(test())
    })
    .catch(err => console.log(err))
  }

}

export const EmptyCart = () => {
  return {
    type: actiontypes().cart.empty
  }
}

export const getOrders = () => {
  return dispatch => {
    let array = []

    db.collection('orders').get().then(SnappShot => {
      SnappShot.forEach(order => {

        const data = {
          id: order.id,
          userId: order.data().userId,
          email: order.data().email,
          cart: order.data().cart,
          total: order.data().total,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }
        array.push(data)
      })

      dispatch(setOrders(array))
      // dispatch(setOrders(array))
      // dispatch(productsReverse())
    })
  }
}

export const setOrders = orders => {
  let byDate = orders.sort((a, b) => b.createdAt - a.createdAt)
  return {
    type: actiontypes().orders.setOrders,
    payload: byDate
    // payload: orders.reverse()
    
  }
}

export const getOrder = (id) => {
  return dispatch => {

    db.collection('orders').doc(id).get().then(order => {
    
        const data = {
          id: order.id,
          userId: order.data().userId,
          email: order.data().email,
          cart: order.data().cart,
          total: order.data().total,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }
    
     
      dispatch(setOrder(data))
      let id = data.id
      dispatch(setOrderId(id))

      // dispatch(productsReverse())
    })
  }
}

export const setOrder = order => {
  console.log(order)
  return {
    type: actiontypes().orders.order,
    payload: order
  }
}
export const setOrderId = orderId => {
  console.log(orderId)
  return {
    type: actiontypes().orders.orderId,
    payload: orderId
  }
}

export const findOrders = (id) => {
  return dispatch => {
    let array = []
    // console.log(id)

    db.collection('orders').get().then(SnappShot => {
      SnappShot.forEach(order => {

        const data = {
          id: order.id,
          userId: order.data().userId,
          email: order.data().email,
          cart: order.data().cart,
          total: order.data().total,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }
        
        array.push(data)

      })
      let sort = array.filter(order => order.userId === id)
      dispatch(sortOrders(sort))
      // console.log(sort)
      // dispatch(productsReverse())
    })
  }
}

export const sortOrders = sortedOrders => {
  let byDate = sortedOrders.sort((a, b) => b.createdAt - a.createdAt)
  return {
    type: actiontypes().orders.sortedOrders,
    payload: byDate
    
  }
}


export const getLastOrder = (id) => {
  return dispatch => {
    let array = []
    console.log(id)

    db.collection('orders').get().then(SnappShot => {
      SnappShot.forEach(order => {

        const data = {
          id: order.id,
          userId: order.data().userId,
          email: order.data().email,
          cart: order.data().cart,
          total: order.data().total,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }
        
        array.push(data)

      })
      let last = array.slice(-1)[0]
      dispatch(lastOrder(last))
      console.log(last)
      // dispatch(productsReverse())
    })
  }
}

export const lastOrder = lastOrder => {
  return {
    type: actiontypes().orders.lastOrder,
    payload: lastOrder
    
  }
}

export const changeShipping = (data) => {

  return dispatch => {

    db.collection('orders').doc(data.id).update({
      shipping: data.value
    }).then(() => {
      console.log('Updated')
      dispatch(getOrders())
    })
    .catch((error) =>  console.log(error))
  }
}
export const changeDelivered = (data) => {

  return dispatch => {

    db.collection('orders').doc(data.id).update({
      delivered: data.value
    }).then(() => {
      console.log('Updated')
      dispatch(getOrders())
    })
    .catch((error) =>  console.log(error))
  }
}


export const deleteOrder = (id) => {

  return dispatch => {
    console.log(id)
    db.collection('orders').doc(id).delete()
    .then(() => {  
      console.log('Order is deleted')
      dispatch(getOrders())
    })
    .catch((err) => console.log(err))
  }
}

export const dateBuilder = (_d) => {
 return dispatch => {
    let d = new Date(_d)
    let year = d.getFullYear() 
    let month = d.getMonth() + 1
    let day = d.getDate()

    let date = `${year}-${month}-${day}`
    return date
 }
}





// export const findUserOrder = (id) => {
//   return async dispatch => {
//     const res = await axios.get('/orders')
//     const resultat = await res.data.filter(order => order.userId === id)
//     dispatch(sortOrders(resultat))
//   }
// }
// export const sortOrders = sortedOrders => {
//   return {
//     type: actiontypes().orders.sortedOrders,
//     payload: sortedOrders
    
//   }
// }