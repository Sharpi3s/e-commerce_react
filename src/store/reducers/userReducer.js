import actiontypes from '../actiontypes'

let initState = {
  users: [],
  user: null,
  loggedInUser: null,
  failedLoggin: '',
  loggedIn: false,
  oneUser: null,
  buildUser: null,
  admin: false
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().users.users:
      return {
        ...state,
        users: action.payload
      }
    case actiontypes().users.user:
      return {
        ...state,
        user: action.payload
      }
    case actiontypes().users.setUser:
      return {
        ...state,
        loggedInUser: action.payload
      }
    case actiontypes().users.faildLoggin:
      return {
        ...state,
        faildLoggin: action.payload
      }
    case actiontypes().users.loggedIn:
      return {
        ...state,
        loggedIn: action.payload
      }
    case actiontypes().users.oneUser:
      return {
        ...state,
        oneUser: action.payload
      }
    case actiontypes().users.buildUser:
      return {
        ...state,
        buildUser: action.payload
      }
    case actiontypes().users.admin:
      return {
        ...state,
        admin: action.payload
      }
    default:
      return state
  }
}

export default userReducer