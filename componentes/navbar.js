import React from 'react';
import { ParNavbar } from '../parametros';
import '../css/navbar.css';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href={ ParNavbar.linkPrincipal }> { ParNavbar.tituloPrincipal } </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>     

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href={ ParNavbar.link1 }> { ParNavbar.item1 } <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href={ ParNavbar.link2 }> { ParNavbar.item2 } <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href={ ParNavbar.link3 }> { ParNavbar.item3 } <span class="sr-only">(current)</span></a>
                </li>                                
                </ul>
                <a class="login" href={ ParNavbar.login }>
                    { ParNavbar.login }
                </a>   
            </div>           
        </nav>
    );
};

export default Navbar;