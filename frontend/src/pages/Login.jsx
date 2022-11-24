
import React from 'react'
import { useState,useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { register,reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData;

const {
    user, 
    isLoading,
    isError, 
    isSuccess, 
    message
  } = useSelector((state)=>state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
      dispatch(reset())
    }
    if (isSuccess || user) {
      toast.success(message)
      navigate('/')
      // dispatch(reset())
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
  
  if (isLoading) { 
    return <Spinner />
  }

  const onChange = (e) => {
    setFormData((prevState) =>
      ({ 
        ...prevState, [e.target.name]: e.target.value 
      }))
  }
  const onSubmit = () => (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to your account to continue</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className='form-control'
              name="email"
              id="email"
              value={email}
              placeholder='Enter your email'
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input
              type="password"
              className='form-control'
              name="password"
              id="password"
              value={password}
              placeholder='Enter your password'
              onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login