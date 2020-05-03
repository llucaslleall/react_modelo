- Siga os passos abaixo para configurar o modelo

<< Iniciando o projeto >>
1. npx create-react-app <nome do projeto>
2. npm start

<< Buscando os elementos prontos >>
3. Copiar a pasta de componentes, config, parametros e css para dentro do projeto criado

<< Configurar o firebase >>
4. Parar a aplicação: Ctrl+C
5. npm install firebase
6. npm start

<< No site do firebase - obs: é necessário já ter o projeto no firebase >>
7. Clicar na engrenagem na frente de "Visão geral do projeto"
8. "Configurações do Projeto"
9. </> (pois é um projeto web)
10. Colocar o nome da aplicação
11. "Registrar app"
12. Pegar tudo que tiver dentro da tag <script> e colar no arquivo "config > firebase.js" e trocar var por const
13. Inserir "export default" após a linha do comentário "// Initialize Firebase"

<< Configurar a autenticação no firebase >>
14. Ir em autenticaão e selecionar "configurar métodos de login"
15. Escolher e-mail/senha, escolher as 2 opções e clicar em salvar
16. Criar um novo usuário de teste de forma manual
17. Tentar fazer o login utilizando a tela de login
