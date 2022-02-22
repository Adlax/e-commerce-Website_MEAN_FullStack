This app is made of 3 parts : the database (on mongo), the server (node/express), the UI (Angular).

First, import the data in your mongo db with the files given. Use the following commands (from where the files are) :
mongoimport --db OnlineSales --collection Products --file listeProduits.json --jsonArray --drop
mongoimport --db OnlineSales --collection Carts --file listePaniers.json --jsonArray --drop
mongoimport --db OnlineSales --collection Users --file listeClients.json --jsonArray --drop
By doing this, you create a database called OnlineSales, which contains 3 collections; Products, Carts, Users

Second, cd to the server directory, and type npm install. To launch the server type; node server.js

Third, cd inb the UI folder, run; npm install. Then launch th UI by; ng serve. To log in, use Login: delune@lirmm.fr and password:sideree (sometimes a little bug makes that you have to click the logIn button 2 times...not fixed yet)






