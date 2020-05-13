------------------------------------------
CRUD Aplicacion NodeJS para supermercado
en ésta aplicacion podremos gestionar productos de un supermercado a través de peticiones REST API 

Aspectos tecnicos: 

Colección POSTMAN: https://www.getpostman.com/collections/101f463acd6b32801f69 
Hosting: Digital Ocean 
Dirección IP: 167.172.192.230 
Puerto: 3000 
Bases de datos: MongoDB - MongoDB Atlas 
Framework & Herramientas de pruebas unitarias:  Mocha - Chai 
Framework node.js: express 
Comando de ejecucion de Pruebas unitarias: cd server && npm test
Comando de ejecucion de servicio: cd server && npm run dev
Administrador de aplicaciones de node: PM2
Comando de ejecucion de servicio a traves de PM2: cd server && PM2 start index.js 
Formato de respuesta: JSON
Repositorio: Github
Fecha de inicio: 12/05/2020 
Fecha de finalizacion: 12/05/2020
Desarrollador: Fernando Pinango - fernanj2323@gmail.com
Linkedin: https://www.linkedin.com/in/fernando-pi%C3%B1ango-52238912a/

otros: En las pruebas unitarias comprobamos las respuestas a las peticiones Get, Post, Put, en donde comprobamos que la respuesta sea status:200 cuando se envia una peticion correcta para dicha funcion del controlador, y que responda 404 o 500 cuando se envia una peticion incorrecta a dicha funcion del controlador 

