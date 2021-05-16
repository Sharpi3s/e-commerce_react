import actiontypes from '../actiontypes'
import db from '../../db/firebase.js'

export const addOrder = (data) => {
  let newOrder = {
    userId: data.user.id,
    email: data.user.email,
    cart: data.cart,
    total: data.total,
    itemsQty: data.itemsQty,
    createdAt: Date.now(),
    delivered: false,
    shipping: false
  }

  return dispatch => {
    db.collection('orders').add(newOrder)
    .then(res => { 
      console.log('success')
      dispatch(EmptyCart())
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
          itemsQty: order.data().itemsQty,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }
        array.push(data)
      })
      dispatch(setOrders(array))
    })
  }
}

export const setOrders = orders => {
  let byDate = orders.sort((a, b) => b.createdAt - a.createdAt)
  return {
    type: actiontypes().orders.setOrders,
    payload: byDate
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
          itemsQty: order.data().itemsQty,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }
    
      dispatch(setOrder(data))
      let id = data.id
      dispatch(setOrderId(id))
    })
  }
}

export const setOrder = order => {
  return {
    type: actiontypes().orders.order,
    payload: order
  }
}

export const setOrderId = orderId => {
  return {
    type: actiontypes().orders.orderId,
    payload: orderId
  }
}

export const findOrders = (id) => {
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
          itemsQty: order.data().itemsQty,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }

        array.push(data)
      })
      let sort = array.filter(order => order.userId === id)
      dispatch(sortOrders(sort))
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

    db.collection('orders').get().then(SnappShot => {
      SnappShot.forEach(order => {

        const data = {
          id: order.id,
          userId: order.data().userId,
          email: order.data().email,
          cart: order.data().cart,
          total: order.data().total,
          itemsQty: order.data().itemsQty,
          createdAt: order.data().createdAt,
          delivered: order.data().delivered,
          shipping: order.data().shipping
        }        
        array.push(data)
      })

      let sort = array.filter(order => order.userId === id)
      dispatch(lastOrder(sort))
      dispatch(getOrders())
    })
  }
}

export const lastOrder = lastOrder => {
  let byDate = lastOrder.sort((a, b) => b.createdAt - a.createdAt)
  return {
    type: actiontypes().orders.lastOrder,
    payload: byDate.slice(0)[0]   
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

