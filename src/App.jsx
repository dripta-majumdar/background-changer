import { useState } from "react"

function App() {

  const [color, setColor]=useState("olive");

  return (
    <>
      {/* <h1>Dripta here</h1> */}
      <div className="w-full h-screen duration-200"  style={{ background: color }} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl"> 
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>RED</button> 
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>BLUE</button> 
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>GREEN</button> 
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>BLACK</button> 
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("violet")} style={{backgroundColor:"violet"}}>VIOLET</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>ORANGE</button> 
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>YELLOW</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
