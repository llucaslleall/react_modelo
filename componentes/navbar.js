import React from 'react';
import { ParNavbar } from '../parametros';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Navbar({ ativo }) {
    const dispatch = useDispatch();

    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link class="navbar-brand" to={ ParNavbar.linkPrincipal }> { ParNavbar.tituloPrincipal } </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>     

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to={ ParNavbar.link1 }> { ParNavbar.item1 } <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to={ ParNavbar.link2 }> { ParNavbar.item2 } <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to={ ParNavbar.link3 }> { ParNavbar.item3 } <span class="sr-only">(current)</span></Link>
                </li>                                
                </ul>
                { (ativo) ?
                    <Link onClick={() => dispatch({type: 'LOG_OUT'})} class="sair" to={ ParNavbar.linkSair }>
                        { ParNavbar.sair }
                    </Link>
                :                    
                    <Link class="login" to={ ParNavbar.linkLogin }>
                        { ParNavbar.login }
                    </Link>                                       
                }
            </div>           
        </nav>
    );
};

export default Navbar;