import { useState } from 'react'
import axios from 'axios'
import { useToastMessage } from '../context/Toast'

export const useGetComments = () => {
  const [getSpinner, setGetSpinner] = useState(true)
  const [getPost, setGetPost] = useState([])

  const { errorMessage } = useToastMessage()

  const getComments = async () => {
    const url = `https://backend-personalblog.onrender.com/comment`
    console.log(url)

    try {
      const response = await axios.get(url)
      if (response.status === 200) {
        // window.location.reload(true)
        setGetPost(response.data)
        setTimeout(() => {
          setGetSpinner(false)
        }, 600)
      }
    } catch (error) {
      errorMessage(error.response.data.error)
    }
  }
  return { getComments, getSpinner, getPost }
}
