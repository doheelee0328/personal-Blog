import React, { useEffect, useState } from 'react'
import { useAddComments } from '../../hooks/useAddComment'
import { useGetComments } from '../../hooks/useGetComments'
import {
  SpinnerGetContainer,
  SpinnerAddContainer,
} from '../spinner/Spinner.styled'
import Spinner from '../spinner/Spinner'
import '../../scss/comment.scss'
import { useAuthContext } from '../../hooks/useAuthContext'
import AllComments from '../EditComment/EditComment'
import { useToastMessage } from '../../context/Toast'

const Comment = ({ image, filterPosts }) => {
  const [comments, setComments] = useState({
    userId: '',
    description: '',
    editButton: false,
  })
  const { user } = useAuthContext()
  const { addComments, addSpinner } = useAddComments()
  const { getComments, getSpinner, getPost } = useGetComments()
  const { errorMessage } = useToastMessage()

  const addCommentHandler = (e) => {
    setComments((prev) => ({
      ...prev,
      description: e.target.value,
    }))
  }

  const addClickHandler = async () => {
    if (user) {
      const profileComment = localStorage.getItem('profile-image')
      await addComments(comments.description, profileComment)
      setComments((prev) => ({
        ...prev,
        description: '',
      }))
    } else {
      errorMessage('Please sign in to make a comment')
      setComments((prev) => ({
        ...prev,
        description: '',
      }))
    }
  }

  useEffect(() => {
    getComments()
    // eslint-disable-next-line
  }, [getPost])

  const displayComments = () => {
    let message = <p className='message'>No Comments? Add here</p>

    if (getPost.length > 0) {
      message = getPost.map((comment) => (
        <AllComments
          key={comment._id}
          comment={comment}
          filterPosts={filterPosts}
        />
      ))
    }

    return message
  }

  return (
    <>
      <div className='container'>
        <h2 className='comments-title'>Comments</h2>
        <div className='form'>
          <div className='image-usr-container'>
            <img src={image} alt='comment' className='comment-images' />
            {user && user.name}
          </div>
          <div className='text-container'>
            <textarea
              type='text'
              onChange={addCommentHandler}
              value={comments.description}
              className='input-text'
            />
            <button onClick={addClickHandler} className='add-button'>
              Add
            </button>
          </div>
        </div>
      </div>

      <div>
        {addSpinner && (
          <SpinnerAddContainer>
            <Spinner />
          </SpinnerAddContainer>
        )}
      </div>

      {getSpinner ? (
        <SpinnerGetContainer>
          <Spinner />
        </SpinnerGetContainer>
      ) : (
        displayComments()
      )}
    </>
  )
}

export default Comment
