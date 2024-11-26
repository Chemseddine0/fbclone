
import './Navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { faHouse } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    return (
        <div>


            <header>
                <nav>
                    <ul>
                        <li> <a href="#" id="fb"><i className="fa-brands fa-facebook-f fa-xs"></i></a> </li>
                        <li> <div className="search-box">
                            <input type="text" placeholder="Search Facebook" />
                            <button id="search_btn" > <i className="fas fa-search    "></i>  </button>
                        </div>
                             </li>

                        <li id="space2"></li>

                        <li> <a href="#" id="home"> <i className="fa-solid fa-house"></i> </a> </li>
                        <li> <a href="#" id="group"> <i className="fas fa-tv    "></i> </a></li>
                        <li> <a href="#" id="tv"> <i className="fas fa-store    "></i> </a></li>
                        <li> <a href="#" id="friend"> <i className="fas fa-user-friends    "></i> </a> </li>
                        <li id="space1"></li>
                      
                        <li> <button id="btn_plus" ><i class="fa-solid fa-braille"></i></button> </li>
                        <li> <button id="btn_plus"><i className="fas fa-plus    "></i></button> </li>
                        <li> <button id="btn_msg"><i className="fab fa-facebook-messenger    "></i></button></li>
                        <li> <button id="btn_bell"> <i className="fas fa-bell    "></i></button></li>
                        <li>  <button id="btn_profile" className="pfp"><i className="fas fa-user-cog    " src=""></i></button>  </li>
                        <li><div className="pfp"> <img src="https://preview.redd.it/grandpa-cats-facebook-pfp-v0-kh2t5zb456xb1.jpg?width=1080&crop=smart&auto=webp&s=0f21c531e112ee5725a3db5a26cdc5bec862e655" alt="" /></div> </li>
                    </ul>
                </nav>
                {/* <img src="https://preview.redd.it/grandpa-cats-facebook-pfp-v0-kh2t5zb456xb1.jpg?width=1080&crop=smart&auto=webp&s=0f21c531e112ee5725a3db5a26cdc5bec862e655" alt="" /> */}
            </header>













        </div>
    )
}
export default  Navbar;
