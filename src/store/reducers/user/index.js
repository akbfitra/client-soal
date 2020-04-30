import * as actionTypes from '../../constants/actionTypes'

const initialUser = {
  username: '',
  isLogin: false
}

const user = (state = initialUser, action) => {
  switch(action.type){
    case actionTypes.CEK_LOGIN: 
      return {
        ...state,
          isLogin: true,
          username: action.payload.username
      }
    case actionTypes.LOGIN_USER:
      return {
        ...state,
          isLogin: true,
          username: action.payload.username
      }
    case actionTypes.LOGOUT_USER:
      return{
        ...state,
        isLogin: false,
        username: action.payload.username
      }
    default:
      return state
  }
}

export default user