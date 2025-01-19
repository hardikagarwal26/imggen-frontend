import React , { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(assets.samp1)
  const [imageLoading , setImageLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input , setInput] = useState('')
  const {generateImage} = useContext(AppContext)
  const onSubmmitHandler = async(e) => {
    e.preventDefault()
    setLoading(true)
    if(input){
      const image = await generateImage(input)
      if(image){
        setImageLoading(true)
        setImage(image)

      }
    }
    setLoading(false)
  }


  return (
    <form onSubmit={onSubmmitHandler}
    className='flex flex-col min-h-[90vh] items-center justify-center'>
    <div>
      <div className='relative'>
        <img src={image} alt="" className='max-w-sm
        rounded cursor-pointer hover:scale-105 transition-all duration-500'/>
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-600
       ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>
      </div>
      <p className={!loading ? 'hidden' : ''}>
        Loading.....
      </p>
    </div>
    {!imageLoading &&
    <div className='flex w-full max-w-xl bg-neutral-500 text-white
    text-sm p-0.5 mt-10 rounded-full'>
      <input onChange={(e) => setInput(e.target.value)} value={input}
      type="text" placeholder='Enter your prompt'
      className='flex-1 bg-transparent outline-none
      ml-8 max-sm:w-20 placeholder-color'/>
      <button type='submit'
      className='bg-black px-10 sm:px-16 py-3 rounded-full'>
        Generate
      </button>
    </div>
}
{imageLoading &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={() => {setImageLoading(false)}}
      className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another Image</p>
      <a href={image} download
      className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download Image</a>
    </div>
}
    </form>
  )
}

export default Result
