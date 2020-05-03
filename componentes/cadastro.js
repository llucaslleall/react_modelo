import React, {useState} from 'react';
import { ParCadastro } from '../parametros';
import '../css/cadastro.css';
import { Navbar } from './';
import firebase from '../config/firebase';
import 'firebase/auth';

function Cadastro(){

    const[email, setEmail] = useState();    
    const[senha, setSenha] = useState();    
    const[msgTipo, setMsgTipo] = useState();
    const[msg, setMsg] = useState();
    const[carregando, setCarregando] = useState();

    function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);

        if(!email || !senha){
            setCarregando(0);
            setMsgTipo('erro')
            setMsg(ParCadastro.textoErro)
            return
        }

        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('sucesso')
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro');
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('E-mail já cadastrado');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('Formato de e-mail inválido');
                    break;    
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde');
                    break;
            }
            return
        })
    }

    return(
    <>    
        < Navbar />

        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'> {ParCadastro.titulo} </h1>
                
                <input onChange={(e) => setEmail(e.target.value) } type='email' className='form-control my-2' placeholder={ ParCadastro.placeholder1 } />
                <input onChange={(e) => setSenha(e.target.value) } type='password' className='form-control my-2' placeholder={ ParCadastro.placeholder2 } />

                {
                    carregando 
                        ?
                            <div class="spinner-border text-danger" role="status">
                                <span class="sr-only"> { ParCadastro.msgLoading } </span>
                            </div>
                        :
                            <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'> 
                                { ParCadastro.botao } 
                            </button>    
                }

                <div className="msg-login text-center my-5">
                    {
                        msgTipo === 'sucesso' && <span><strong> { ParCadastro.strongSucesso } </strong> { ParCadastro.textoSucesso } </span>
                    }
                    {
                        msgTipo === 'erro' && <span><strong> { ParCadastro.strongErro } </strong> {msg} &#128546;</span>
                    }    
                </div>        
            </form>
        </div>
    </>
    )

}

export default Cadastro;