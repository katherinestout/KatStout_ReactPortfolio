import React from 'react';
import './../style/smallProjectLinks.css';



const SmallProjectLinks = () => {
    return(

       <div className="smallpageslinks">
            <ul className="smallpageslinksul">
                <li>
                <button className="button">
                <a href ="https://katherinestout.github.io/FloralWordGame/">
                    Deployed
                    </a>
                    </button>
                    <button className="button"> 
                    <a href ="https://github.com/katherinestout/FloralWordGame">
                    Code </a></button>
                    </li>

                <li><button className="button">
                    <a href="https://katherinestout.github.io/Todo_Redux/">
                    Deployed</a></button>
                    <button className="button">
                    <a href="https://github.com/katherinestout/TodoList">
                    Code
                    </a>
                    </button>
                    </li>

                <li><button className="button"> 
                    <a href="https://young-dusk-20952.herokuapp.com/">
                    Deployed</a></button>
                    <button className="button">
                    <a href="https://github.com/katherinestout/DoctorWho_ReactGame">
                   Code
                   </a>
                    </button>
                    </li>
            </ul>
            </div>
    )
}

export default SmallProjectLinks;