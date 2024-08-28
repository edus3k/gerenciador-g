import React from "react";
import './style.css'

import Headers from '../../components/Headers'

export default function Home(){
    return(
        <div className="container">
            <Headers/>
            <div className="containerFull">
                <div className="menuLateral">
                    <nav className="">
                        <ul className="">
                            <li className=""><a>Home</a></li>
                            <li className=""><a>User</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}