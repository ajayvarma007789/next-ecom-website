"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cart from "./Cart";


const NavbarIcons = () => {

    const [IsProfileOpen, SetIsProfileOpen]=useState(false);
    const [IsCartOpen, SetIsCartOpen]=useState(false);
    const isLoggin = false;
    const router = useRouter();
    
    const handleProfile = () => {
        if(!isLoggin){
            router.push("/login");
        }
        SetIsProfileOpen((prev)=>!prev);
    }

    return (
        <div className=" flex items-center gap-4 xl:gap-6 ">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer relative" onClick={handleProfile}/>
            {IsProfileOpen && <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-white shadow-lg z-20">
                <Link href="/">Profile</Link>
                <div className=" mt-2 cursor-pointer">LogOut</div>
            </div>}
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer" />
            <div className="relative cursor-pointer">
                <Image src="/cart.png" alt="" width={22} height={22} className="cursor-pointer" onClick={()=>SetIsCartOpen((prev)=>!prev)}/>
                <div className="flex absolute -top-4 -right-4 w-6 h-6 rounded-full items-center text-white text-sm justify-center bg-red-400">2</div>
            </div>
            {IsCartOpen && <div className="relative  p-4 rounded-md top-12 left-0 text-sm bg-white shadow-lg z-20">
                <Cart/>
            </div>}
        </div>
    );
}
export default NavbarIcons;