import { ReactTyped } from "react-typed";
import Cpp from "./icons/c";
import Python from "./icons/python";
import C from "./icons/cpro";
import Card from "./componets/card";
import JavaScript from "./icons/javaScript";
import TypeScript from "./icons/typescript";
import LogoReact from "./icons/react-2";
import Nextjs from "./icons/next";
import Mysql from "./icons/mysql";
import Posgress from "./icons/posgress";
import Mogodb from "./icons/mogodb";

export default function App(){
  return<div className="bg-radial from-[#121212] to-[#1A1A1A] min-h-screen w-screen text-white  ">
    <div className="h-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center justify-between">
      <div><button className="ml-5 font-bold">Home</button></div>
      <div>
        <button className="mr-5 font-bold">Profile</button>
        <button className="mr-5 font-bold">Education</button>
        <button className="mr-5 font-bold">Projects</button>
        <button className="mr-5 font-bold">github</button>
        <button className="mr-5 font-bold">leetcode</button>
        <button className="mr-5 font-bold">codechef</button>

      </div>
      
    </div>
    <div className="flex flex-col justify-center items-center w-full h-[30%] mb-10">
      <div className="md:text-5xl text-2xl font-bold tracking-tight py-6 my-5 text-[#E0E0E0]">
        Greetings folks!
      </div>
      <div className="md:text-5xl text-2xl font-bold tracking-tight flex flex-col items-center text-blue-300">
        <ReactTyped strings={["Hi, I'm Grins Sah","A Web Developer","Al ML enthusiast  ",""]} loop typeSpeed={50} backSpeed={50} />
      </div>
    </div>
    <div className="mb-10 flex flex-col">
    <span className="ml-5 text-3xl mb-10 font-bold hover:text-blue-100 hover: italic">Programming Languages:-</span>
    <div className=" grid md:grid-cols-6 grid-cols-3 gap-4 w-full h-fit ">
      <Card><Cpp/></Card>
      <Card><Python/></Card>
      <Card><C/></Card>
      <Card><JavaScript/></Card>
      <Card><TypeScript/></Card>
    </div>
  </div>
  <div className="mb-10">
  <div className="ml-5 text-3xl hover:text-blue-100 mb-10 font-bold italic">Frameworks:-</div>
    <div className=" grid md:grid-cols-6 grid-cols-3 gap-4 w-full h-fit ">
      <Card><LogoReact/></Card>
      <Card><Nextjs/></Card>

    </div>
  </div>
  <div className="mb-10">
  <div className="ml-5 text-3xl mb-10 hover:text-blue-100 mt-5 font-bold italic">Databases:-</div>
    <div className=" grid md:grid-cols-6 grid-cols-3 gap-4 w-full h-fit ">
      <Card><Mysql/></Card>
      <Card><Posgress/></Card>
      <Card><Mogodb/></Card>
    </div>
  </div>
  <div>
  <div className="ml-5 text-3xl mb-10 hover:text-blue-100  mt-5 font-bold italic">library:-</div>
    <div className=" grid md:grid-cols-6 grid-cols-3 gap-4 w-full h-fit text-3xl pl-5 ">
      <div>Express</div><div>Zod</div><div>Websockets</div><div>Bcrypt</div><div>NextAuth</div><div>Cors</div><div>Axios</div>
      <div>TailwindCSS</div>
      <div>Mongoose</div>
      <div></div>

    </div>
  </div>
  </div>

}
