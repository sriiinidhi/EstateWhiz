import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <header className='bg-slate-200 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className="text-slate-500">Estate</span>
                <span className="text-slate-700">Whiz</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4 '>
                <li className='hidden sm:inline text-slate-800 hover:underline'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hidden sm:inline text-slate-800 hover:underline'>
                    <Link to='/about'>About</Link>
                </li>
                <Link to='/profile'>
                {currentUser ? (
                  <img src={currentUser.avatar} alt='profile' className='w-8 h-8 rounded-full object-cover' />
                ):(
                <li className='text-slate-800 hover:underline'>Sign In</li>)}
                </Link>
            </ul>
        </div>
      </header>
    </div>
  )
}
