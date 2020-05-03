- Siga os passos abaixo para configurar o modelo

<< Iniciando o projeto >>
1. npx create-react-app <nome do projeto>
2. npm install firebase
3. npm install react-router-dom
4. npm install redux
5. npm install react-redux
6. npm install redux-persist
(ou fazer 
yarn add firebase react-router-dom redux react-redux redux-persist
)
7. npm start

<<Atualizar o 'index.html'>>
8. Ir até o 'public > index.html' e, no <head>, importar o CSS do Bootstrap
    <!-- Importação do CSS do Bootstrap-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
9. No final do <body> desse mesmo arquivo, importar o JS do Bootstrap    <!-- Importação do JS do Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<< Buscando os elementos prontos >>
10. Copiar a pasta de componentes, config, parametros, store e css e paginas para dentro do projeto criado
11. Sobrescrever o arquivo 'App.js' com o do modelo
12. Editar o arquivo 'index.js' apenas com os componentes que serão usados


<< No site do firebase - obs: é necessário já ter o projeto no firebase >>
. Clicar na engrenagem na frente de "Visão geral do projeto"
. "Configurações do Projeto"
. </> (pois é um projeto web)
. Colocar o nome da aplicação
. "Registrar app"
. Pegar tudo que tiver dentro da tag <script> e colar no arquivo "config > firebase.js" e trocar var por const
. Inserir "export default" após a linha do comentário "// Initialize Firebase"

<< Configurar a autenticação no firebase >>
. Ir em autenticaão e selecionar "configurar métodos de login"
. Escolher e-mail/senha, escolher as 2 opções e clicar em salvar
. Criar um novo usuário de teste de forma manual
. Tentar fazer o login utilizando a tela de login

<< Rotas >>
. Toda nova página que for criada deve ser adicionada no 'App.js'
. Trocar todo <a> por <Link>

<< persist >>
. É possível atualizar a chave com o nome do seu site