import React from 'react';
import './../style/smallProjectLinks.css';




const BigProjectLinks = () => {
    return(

       <div className="smallpageslinks">
            <ul className="smallpageslinksul">
                <li>
                <button className="button">
                <a href ="https://katprojectplan.firebaseapp.com/signin">
                    Deployed
                    </a>
                    </button>
                    <button className="button"> 
                    <a href = "https://github.com/katherinestout/FirebaseReactRedux">
                    Code </a></button>
                    </li>

                <li><button className="button">
                    <a href="https://katherinestout.github.io/Drinkerator/">
                    Deployed</a></button>
                    <button className="button">
                    <a href="https://github.com/katherinestout/Drinkerator">
                    Code
                    </a>
                    </button>
                    </li>

                <li><button className="button"> 
                    <a href="https://damp-mountain-40245.herokuapp.com/login">
                    Deployed</a></button>
                    <button className="button">
                    <a href="https://github.com/katherinestout/React_MERN">
                   Code
                   </a>
                    </button>
                    </li>
            </ul>
            </div>
    )
}

export default BigProjectLinks;