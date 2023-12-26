import './DivOne.css'
import mountain from './mountain.png'
import cloud from './cloud.png'

export default function UserComp(){
    return(
        <div class="top-container">
            <img src={cloud} alt='TopCloud' class='TopCloud'/>
            <img src={cloud} alt='BottomCloud' class='BottomCloud'/>
        <h1>I'm Parth</h1>
        <h2>A <span class="pro">Pro</span>grammer</h2>
        <img src={mountain} alt='Mountain'/>    
        </div>
    );
}