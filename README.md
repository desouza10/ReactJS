Anotações Gerais:
<br>
Uso do webpack-dev-server como servidor para livereload e babel-loader<br>
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli<br>
npm i webpack-dev-server<br>
npm install react react-dom<br>
<br>
Principais conceitos:<br>
<br>
Componentes: Componentes são conjuntos isolados de lógica (Javascript), visualização (JSX/HTML) e possível estilização (CSS).<br>
Propriedades: Assim como no HTML, podemos repassar propriedades nas notações dos nossos componentes e acessá-las de forma muito rápida.<br>
Estado: Variável que fica dentro do componente que possui todas as informações que podem ser manipuladas pelo componente.<br>
<br>
<br>
Componentes:<br> 
<br>
React, Component, Fragment from 'react'<br>
React = importação da biblioteca react<br>
Component = classe padrão de componentes, onde seus componentes serão herdadas dela<br>
Fragment = componente responsável por garantir a estrutura padrão do HTML ao importar JSX nos renders do react<br>
react from 'react-dom' = render responsável por conectar o componente react com o elemento HTML. <br>
<br>
<br>
<br>
<br>
<br>
<br>
Observações:<br>
1. Separamos o componente "Button" do componente "App", utilizando "export default class ... { }" para exportar e "import ... from "./file"<br>