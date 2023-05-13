import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
        <p>Please login to your account before accessing homepage</p><br/>
        <p>If you dont have a account create a account. It's really easy</p><br/>
        <Link to="/" className='bg-subMain text-white font-medium py-2 px-4 rounded-md'>Go To Login Page </Link>
      </div>
    </div>
  )
}

export default NotFound