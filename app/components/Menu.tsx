"use client";
import React from "react";
import Link from "next/link";
import  Image  from "next/image";

const [Open, SetOpen] = React.useState(false);

const Menu = () => {
    return(
        <div>
            <Image alt="menu" src="/menu.png" width={28} height={28} className="curser-pointer" onClick={()=> SetOpen((prev)=>!prev)}/>{
                Open && (
                    <div className="absolute top-20 right-0 bg-white w-44 h-44 flex flex-col items-center justify-center">
                        <Link href="/" className="text-black text-lg">Home</Link>
                        <Link href="#" className="text-black text-lg">Shop</Link>
                        <Link href="#" className="text-black text-lg">Deals</Link>
                        <Link href="#" className="text-black text-lg">About</Link>
                        <Link href="#" className="text-black text-lg">Logout</Link>
                        <Link href="#" className="text-black text-lg">Cart(1)</Link>
                    </div>
                )
            }
        </div>
    )
} 

export default Menu;