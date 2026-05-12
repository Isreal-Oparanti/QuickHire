import React from 'react'



function Navbar() {
  return (
    <nav className='bg-gray-100 p-5 border-b-1 border-gray-200'>
      <div className='flex justify-between'>
        <div className='text-green-800 font-bold text-xl'>QuickHire</div>
        <div>
          <ul className='flex gap-5 mr-7 m-auto'>
            <li className='hover:text-green-500'><a href="#">Home</a></li>
            <li className='hover:text-green-500'><a href="#">About</a></li>
            <li className='hover:text-green-500'><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar