"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="">
            <Image 
                alt="menu" 
                src="/menu.png" 
                width={28} 
                height={28} 
                className="cursor-pointer" 
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className="absolute bg-black text-white left-0 top-20 w-full h-[cal(100vh-80px)] flex flex-col items-center justify-center gap-8 z-10 text-xl">
                    <Link href="/" className="text-lg hover:text-gray-600">Home</Link>
                    <Link href="#" className="text-lg hover:text-gray-600">Shop</Link>
                    <Link href="#" className="text-lg hover:text-gray-600">Deals</Link>
                    <Link href="#" className=" text-lg hover:text-gray-600">About</Link>
                    <Link href="#" className="text-lg hover:text-gray-600">Logout</Link>
                    <Link href="#" className="text-lg hover:text-gray-600">Cart(1)</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;