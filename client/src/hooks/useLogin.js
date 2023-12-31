import { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { useToastMessage } from '../context/Toast'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  // usestate
  const [spinner, setSpinner] = useState(false)

  // navigate

  const navigate = useNavigate()

  // hooks
  const { dispatch } = useAuthContext()
  const { successMessage, errorMessage } = useToastMessage()

  const login = async (email, password) => {
    setSpinner(true)

    const url = 'https://backend-personalblog.onrender.com/user/login'
    const data = {
      email: email,
      password: password,
    }

    try {
      const response = await axios.post(url, data)
      if (response.status === 201) {
        dispatch({ type: 'Login', payload: response.data })
        localStorage.setItem('user', JSON.stringify(response.data))

        successMessage('You have logged in successfully')
        console.log('You have logged in successfully')
        setSpinner(true)
        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    } catch (error) {
      setSpinner(false)
      errorMessage(error.response.data.error)
      console.log(error.response.data.error)
    }
  }
  return { login, spinner }
}
