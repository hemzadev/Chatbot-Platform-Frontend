import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center mw-full mb-7 mx-10 my-3">
            {/*Left side*/}
            <div className="font-Inter font-bold text-[24px]">
                QueryBot
            </div>
            {/*Right side*/}
            <div className="flex justify-between items-center gap-20">
                <Link href="/" className="relative font-Inter font-bold text-[15px] group">
                    <span className="light : block px-10 py-2 text-gray-800 group-hover:bg-customBlue group-hover:text-white group-hover:rounded-[15px]">
                        Home
                    </span>
                </Link>
                <Link href="/" className="relative font-Inter font-bold text-[15px] group">
                    <span className="light : block px-10 py-2 text-gray-800 group-hover:bg-customBlue group-hover:text-white group-hover:rounded-[15px]">
                        About
                    </span>
                </Link>              
                <Link href="/" className="relative font-Inter font-bold text-[15px] group">
                    <span className="light : block px-10 py-2 text-gray-800 group-hover:bg-customBlue group-hover:text-white group-hover:rounded-[15px]">
                        Plans
                    </span>
                </Link>
                <button className="light : rounded-[15px] bg-customBlue text-white hover:bg-slate-500 py-2 px-4 font-Inter font-bold text-[15px]">
                    Subscribe
                </button>
                <button className="light : rounded-[15px] bg-customBlue text-white hover:bg-slate-500 py-2 px-4 font-Inter font-bold text-[15px]">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;