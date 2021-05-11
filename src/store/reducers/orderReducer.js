import actiontypes from '../actiontypes'

const initState = {
  orders: [],
  sortedOrders: [],
  lastOrder: null,
  order: null,
  orderId: null
}

const orderReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().orders.setOrders:
      return {
        ...state,
        orders: action.payload
      }
    case actiontypes().orders.order:
      return {
        ...state,
        order: action.payload
      }

    case actiontypes().orders.orderId:
      return {
        ...state,
        orderId: action.payload
      }

    case actiontypes().orders.sortedOrders:
      return {
        ...state,
        sortedOrders: action.payload
      }
      
    case actiontypes().orders.lastOrder:
      return {
        ...state,
        lastOrder: action.payload
      }
      
    default:
      return state
  }
}


export default orderReducer