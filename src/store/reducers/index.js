import { combineReducers } from 'redux'

import ProductReducer from './ProductReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import orderReducer from './orderReducer'

export default combineReducers({
  ProductReducer,
  cartReducer,
  userReducer,
  orderReducer
})