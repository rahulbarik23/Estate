import React from 'react'

const Contact = () => {
  return (
     <div  className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'> Contact <span className='underline underline-offset-4 decoration-1 under font-light'> us</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to make a Move ? let's Build Your Future Together</p>
       
       <form>
        <div className='flex  flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>Your Name 
         <input  className='w-full border border-gray-300'  type='text' placeholder='Your Name' required/>
        </div>

        <div className='w-full md:w-1/2 text-left md:pl-4'> Email 
         <input  className='w-full border border-gray-300'  type='Email' placeholder='Email' required/>
        </div>

        </div>
         <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none' name='message' placeholder='Message' required></textarea>
         </div>
         <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>Send button</button>
       </form>
    </div>
  )
}

export default Contact