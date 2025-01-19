import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {

  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {

    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl sm:text-3xl font-semibold lg:text-4xl
        text-neutral-900 py-6 md:py-16'>Generate Images , Try Now !</h1>
      <button 
      onClick={onClickHandler}
      className='inline-flex items-center gap-2
      text-white bg-black m-auto px-12 py-2.5 rounded-full hover:scale-105 transition-all duration-500'>Generate Images 
        <img src={assets.star_group} alt=""  className='h-6'/>
      </button>
    </div>
  )
}

export default GenerateButton
