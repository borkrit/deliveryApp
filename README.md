# deliveryApp

For to start project need do few steps:
- Pull project from git
- Install project dependency 
- Create personal database with mysql 
- Populate the database
- Setup your parametrs in app (db and url for axios request) 
- And run project

After pull project, open folders (client and server)  project and intall dependency in both folders
`yarn i or npm i`


-----Create personal database ----- <br/>
I used mysql with mysql workbench ( i skip step work install ) 

Need create 3 table:
-Orders
-Menu
-restaurants

|---------------Orders---------------|<br/>
| idOrders -- int -- PK              <br/>
| name - VARCHAR(45)                 <br/>
| phone - VARCHAR(45)                <br/>
| address - VARCHAR(255)             <br/>
| email - VARCHAR(45)                <br/>
| orderInfo - JSON                   <br/>
| total - FLOAT                      <br/>
|------------------------------------|<br/>

|---------------Menu---------------|<br/>
| id -- int -- PK   <br/>
| Title - VARCHAR(45)   <br/>
| Price - VARCHAR(45)      <br/>
| restaurant - int   <br/>
| img - VARCHAR(255) <br/>
|----------------------------------|<br/> 
If restaurant has been FOREIGN KEY for table `restaurants`  be better

|------------restaurants-----------|<br/>
| id -- int -- PK     <br/>
| title - VARCHAR(45)   <br/>
|----------------------------------|<br/>

Forexample add item to Menu : `INSERT INTO `Menu` (`id`,`Title`,`Price`,`restaurant`,`img`) VALUES (17,'TORTILLA Z PIECA Z HALLOUMI','16.99',4,'https://www.northfish.pl/upload/products/314_app_products_image_produkt_1180x380---tortilla---piec---halloumi.jpg');`

---Setup your parametrs in app (db and url for axios request) ----<br/>

In folder server in index.js passed you connect database information and need change url in client where used axios , need pasted you url localhost server

And last step this is run app 
in client `yarn dev`
in server `yarn start`



