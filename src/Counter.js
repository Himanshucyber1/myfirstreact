import React , {useState } from 'react'

export default function Counter() {
    const [num,setNum]=useState(5);
    function Addition(){
   setNum(num+1) 
    }
    function Sub(){
        setNum(num-1) 
         }
        
         function Multiply(){
            setNum(num*num)}
               
            function Divide(){
                setNum(num/2)}
                   
  return (
    <>
    <div>
   {num}
    </div>
<<<<<<< HEAD
    <button onClick={Addition}>Add</button>
    <button onClick={Sub}>Subtract</button>
=======
    <button onClick={Additon}>Add</button>
    <button onClick={Subtraction}>Subtract</button>
>>>>>>> e5540d380201da75ecf9746099c8601e74421424
    <button onClick={Multiply}>Mul</button>
    <button onClick={Divide}>Divide</button>
  </>
  )


}
