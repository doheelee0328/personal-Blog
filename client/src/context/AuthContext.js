import { useEffect } from 'react'
import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  // handle login and logout cases when user signs up users can automatically login and logout automatically
  // this determines the behaviour whether the user has logged in or not
  switch (action.type) {
    case 'Login':
      return { user: action.payload }
    case 'Logout':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'Login', payload: user })
    }
  }, [])
  // try to get user from the local storage if the user exists

  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
