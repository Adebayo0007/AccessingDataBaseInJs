'use strict';


const mysql = require('mysql');
// opening connection
const connection = mysql.createConnection({
    host: 'localhost',
    port : 3306,
    user: 'root',
    password: 'Adebayo58641999',
    database: 'agroexpressapi',
    insecureAuth : true
});
//connectiong to the database
connection.connect((error) =>{
    if(error){
        console.log('Error conecting to my Sql', error);
    }
    else{
        console.log('Connected to my Sql Server');
    }
});
//querying the database
connection.query('SELECT * FROM users', (error, result) =>{
    if(error){
        console.log('Error executing qury', error);
    }
    else{
       
        console.log('Query results:',result);
        result.forEach(element => {console.log(element.UserName);
            
        });
    }
});
//close the connection
connection.end((error) =>{
    if(error){
        console.log('Error closing connection', error);
    }
    else{
        console.log('My sql Connection closed');
    }
})

// const generate = (data) =>{localStorage.setItem('datas', JSON.stringify(data))};
