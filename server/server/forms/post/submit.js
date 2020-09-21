const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
// const sql = require('mssql');
const router = express.Router();



// let con = mysql.createConnection({
//     host: "localhost",
//     user: "shakedA",
//     password: "qwerty123456",
//     database: "webq"
//   });
// con.connect(function (err)
// {
//     if (err) throw err;
// });


// router.post('/submit_form' , async (req , res) =>
// {
//     let form = req.body.form;
//     let name = form.name;
//     let answers = form.answers;
//     let time = new Date().toISOString().slice(0, 19).replace('T', ' ');    
//     //create this as the sql format f_name,q_name,ans,time
//     let sql_rows =[];
//     for (q_name in answers) 
//     {
//         //if the answer is an array when you choose multiplay answer
//         if ( Array.isArray(answers[q_name]) )
//         {
//             for (ans of answers[q_name])
//             {
//                 sql_rows.push([name , q_name , ans , time]);        
//             }
//         }
//         else
//         {
//             sql_rows.push([name , q_name , answers[q_name] , time]);
//         }
//     }
    
//     //submit to the database
//     let sql_querry = "INSERT INTO answers (form_name, question_name , answer , world_time) VALUES ?";
//     let format_string = mysql.format(sql_querry , [sql_rows]);
    
//     con.query(format_string , (err, result, fields) =>
//     {
//         if (err) throw err;
        
//         //sending the result
//         //res.sendStatus(201);
//         res.send(result);
//     });
//     //
//     //res.send(form);    
// });


// let configConnection = {
//     user     :      'beny'      ,
//     password :      'beny'      ,
//     server   :      'sql-srv',
//     database    :   'SDB2019',
//     typeCast(field , next)
//     {
//       if (field.type == 'DATETIME')
//       {
//         const utcTime = Math.floor((new Date(field.string() + ' UTC')).getTime() / 1000);
//         const fixedDate = new Date(0);
//         fixedDate.setUTCSeconds(utcTime);
//         return fixedDate;
//       }
//       return next();
//     }
//   }
  
// const con = new sql.ConnectionPool(configConnection);
// con.connect()

// router.post('/submit_form' , async (req , res) =>
// {
//     let form = req.body.form;
//     let name = form.name;
//     let answers = form.answers;
//     //let time = new Date().toISOString().slice(0, 19).replace('T', ' ');
//     let current_date = new Date();    
//     let date = current_date.toLocaleDateString().replace('/','-').replace('/','-');
//     let time_now = current_date.getHours() + ':' + current_date.getMinutes() + ':' + current_date.getSeconds() //+ current_date.getMilliseconds();
//     let time = `${date} ${time_now}`
//     //create this as the sql format f_name,q_name,ans,time
//     let sql_rows =[];
//     for (q_name in answers) 
//     {
//         //if the answer is an array when you choose multiplay answer
//         if ( Array.isArray(answers[q_name]) )
//         {
//             for (ans of answers[q_name])
//             {
//                 sql_rows.push([name , q_name , ans , time]);        
//             }
//         }
//         else
//         {
//             sql_rows.push([name , q_name , answers[q_name] , time]);
//         }
//         // console.log(q_name + answers[q_name]);
//     }
//     // console.log(sql_rows);
    
//     //submit to the database
//     let sql_querry = "INSERT INTO webq.[answers] (form_name, question_name , answer , world_time) VALUES ?;";
//     let format_string = mysql.format(sql_querry , [sql_rows]);
//     console.log(format_string);

//     /////////////////////////////////////////////////////////////////////////////////////////////////
//     //save to BU local
//     // data_as_string = JSON.stringify(form);
//     // let time_stamp = new Date().getTime();
//     // fs.writeFile(`./server/BU/${name}At${time_stamp}.json` , data_as_string ,'utf8' , (err) => 
//     // {
//     //     if (err) {console.log(err);}
//     //     console.log(`created BU file at ---- 
//     //     ./BU/${name}At${time}.json`);
//     // });
//     // fs.writeFile(`\\\\files\\ExpData\\SDB2019\\Questionaries\\BackUp\\${name}At${time_stamp}.json` , data_as_string ,'utf8' , (err) => 
//     // {
//     //     if (err) {console.log(err);}
//     //     console.log(`created BU file at ---- 
//     //     ./BU/${name}At${time}.json`);
//     // });
//     /////////////////////////////////////////////////////////////////////////////////////////////////

//     con.query(format_string , (err, result, fields) =>
//     {
//         if (err) {console.log(err);}
//         console.log(result);
//         // console.log(fields);
//         // console.log(form);
//         res.send(result);
//     });
//     //
//     //res.send(form);    
// });




//export
module.exports = router;