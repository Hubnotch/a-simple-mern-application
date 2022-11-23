/* eslint-disable no-unused-vars */
import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

const {name, email, password, password2} = formData;

const onChange =() => (e) => {}

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please create an account to continue</p>
      </section>
      <section className="form">
        <form>
          <input className='form-control' value={name} type="text" name="name" id="name" placeholder='Enter your name' onChange={onChange}/>
        </form>
      </section>
    </>
  )
}

export default Register