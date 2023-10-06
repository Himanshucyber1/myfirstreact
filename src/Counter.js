import React , {useState } from 'react'

export default function Counter() {
    const [num,setNum]=useState(5);
    function Add(){
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
    <button onClick={Additon}>Add</button>
    <button onClick={Subtraction}>Subtract</button>
    <button onClick={Multiply}>Mul</button>
    <button onClick={Divide}>Divide</button>
  </>
  )


}
