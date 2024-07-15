import {useRef} from 'react'

export default function Start({setUsername}) {

  const inputRef=useRef()

  //agar input mai value dali hai tabhi start click hoga 
  const handleClick=()=>{
    inputRef.current.value && setUsername(inputRef.current.value)
  }

  return (
    <div className="start">
      <input placeholder="Enter your name" className="startInput" ref={inputRef}/>
      <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  )
}
