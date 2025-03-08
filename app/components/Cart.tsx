"use client";

import Image from "next/image";

const Cart = () => {

const catItems = false;

    return (
        <div className="absolute p-4 rounded-md shadow-lg z-20 bg-white right-0 flex flex-col gap-6 ">
            {
                catItems ? <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <Image src="" alt="" width={72} height={96} className="object-cover rounded-md "/>
                        <div>
                            <h3>Product Name</h3>
                            <p>1 x $200</p>
                        </div>
                    </div>
                    <button className="text-white bg-red-400 px-4 py-1 rounded-md">Remove</button>
                </div> : <h1>Cart is Empty</h1>
            }
        </div>
    )
}
export default Cart;