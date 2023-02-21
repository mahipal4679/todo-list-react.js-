import React,{useRef} from 'react'
//import a class of react-icons
import {AiOutlinePlus} from "react-icons/ai";

export default function Input(props) {
    const inputBox = useRef();

  return (
    <div className='p-3 flex justify-around'>

        <input type="text" placeholder='Enter you Todo here!!' className='p-3 focus:outline-none w-[85%] border border-slate-500' ref={inputBox}/>

        <div className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center'
         onClick={() => {
            props.handler(inputBox.current.value)
            inputBox.current.value = "";}}>
            <AiOutlinePlus/>
        </div>
    </div>

  )
}