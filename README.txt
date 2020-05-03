- Siga os passos abaixo para configurar o modelo

<< Iniciando o projeto >>
1. npx create-react-app <nome do projeto>
2. npm install firebase
3. npm install react-router-dom
4. npm install redux
5. npm install react-redux
6. npm install redux-persist
7. npm start

<< Buscando os elementos prontos >>
8. Copiar a pasta de componentes, config, parametros, store e css e paginas para dentro do projeto criado
9. Sobrescrever o arquivo 'App.js' com o do modelo
10. Editar o arquivo 'index.js' apenas com os componentes que serão usados


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