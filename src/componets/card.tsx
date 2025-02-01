import { ReactNode } from "react";

export default function Card({children}:{
    children:ReactNode
}):ReactNode{
    return <div className="rounded hover:shadow-[0_6px_30px_rgba(0,168,232,0.5)] flex justify-center items-center ml-5 ">
        {children}
    </div>
}