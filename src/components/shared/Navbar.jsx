import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container flex mx-auto justify-between my-4'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-400 gap-3'>
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about-us"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/career"} className={'text-yellow-700'}>Career</NavLink>
                </li>
            </ul>

            <div className='flex gap-2 items-center'>
                <Image src={userAvatar} alt='user avatar' width={50} height={50} className='rounded-full'/>
                <button className='btn bg-purple-500 text-white'>
                <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;