import Link from 'next/link';
import React from 'react';
import { FaYoutube, FaTwitter, FaGithub, FaLaptop , FaMedium} from "react-icons/fa"
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className='bg-slate-400 p-4 sticky top-0 z-10 drop-shadow-xl'>

      <div className='prose prose-xl mx-auto flex justify-evenly flex-col  sm:flex-row align-middle
      
      '>

        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link href={'/'} className='text-white/90  no-underline hover:text-white'> zin
          </Link>
        </h1>

        <div id='search-bar' className=' grid place-content-center mb-2 md:mb-0'>
          <SearchBar/> 
        </div>

        <div id='all-social-links' className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>

          <Link href={'https://twitter.com/zinheinkg'} className=' text-white/90 hover:text-white'> <FaTwitter/>
          </Link>
          <Link href={'https://medium.com/@kaungzinhein'} className='text-white/90 hover:text-white'> 
          <FaMedium/>
          </Link>


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
