import { Link } from 'react-router-dom'
import './nav.css' 
import hindo from './image/istockphoto-1146517111-612x612.jpg'

function Nav(){
    return(
        <>
        <h1 style={{color:"blue",backgroundColor:"red"}}>Welcome</h1>
       <ul>
        <Link to ='/'>  <li>Home </li></Link>
        <Link to ='/about'> <li>About </li></Link>
        <Link to ='/contact'> <li>Contact </li></Link>
        <Link to ='/products'> <li>Products </li></Link>
       

       </ul>
       < img src={hindo} height={500} alt='no data' ></img>
</>
    )
}

export default Nav