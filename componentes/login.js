import React, {useState} from 'react';
import { ParLogin } from '../parametros';
import '../css/login.css';
import firebase from '../config/firebase';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Login(){

    const[email, setEmail] = useState();    
    const[senha, setSenha] = useState();    
    const[msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => {
                dispatch({type: 'LOG_IN', usuarioEmail: email});      
            },2000);          
        }).catch(erro => {
            setMsgTipo('erro');
        })

    }

    return (
        <div className="Login-content d-flex align-items-center">

            { useSelector (state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null }

            <form className="form-signin mx-auto">
                <div className="text-center mb4">
                <i class="far fa-calendar-check text-white fa-3x"></i>
                <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold"> { ParLogin.nome } </h1>
                </div>   

                    <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder={ ParLogin.placeholder1 } />
                    <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder={ ParLogin.placeholder2 } />
                
                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button"> { ParLogin.botao } </button>

                <div className="msg-login text-white text-center my-5">
                    {
                        msgTipo === 'sucesso' && <span><strong> { ParLogin.strongSucesso } </strong> { ParLogin.textoSucesso } </span>
                    }
                    {
                        msgTipo === 'erro' && <span><strong> { ParLogin.strongErro } </strong>  { ParLogin.textoErro } </span>
                    }    
                </div>
                
                <div className="opcoes-login  text-center mt-5">
                    <a href={ ParLogin.link1 } className="mx-2"> { ParLogin.textoLink1 } </a>
                    <span className="text-white">&#10073;</span>
                    <a href={ ParLogin.link2 } className="mx-2"> { ParLogin.textoLink2 } </a>
                </div>
            </form>
        </div>
    )
}

export default Login;