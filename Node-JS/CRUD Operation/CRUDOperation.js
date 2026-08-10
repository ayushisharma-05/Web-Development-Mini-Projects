//create table

var readLine = require("readline")
const instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})
var mysql = require('mysql2');
const { error } = require("console");
const con = mysql.createConnection({
    host : "localhost",
    user :"root",
    password :"root",
    database :"Emp"
});
con.connect((error)=>{
    if(error)
        console.log("Error : "+error)
    else{
        console.log("Connection made");
        showMenu();
    }
})
 function showMenu(){
    instance.question("Select any one operation : /\n1. Add student \n2. Update Student \n3. Delete studnets \n4. View All Students \n5. View Specific Student by id \n Select Choice :",(option)=>{
        switch(option){
            case '1' : addStudent();
            break;
            case '2' : updateStudent();
            break;
            case '3' : deleteStudent();
            break;
            case '4' : ViewAllStudent();
            break;
            case '5' : viewSpecificStudent();
            break;
            default : console.log("thanks for visit ");
                         con.close();
                         instance.close();
                         break;
        }
    });

 }
 function addStudent(){
    instance.question("Enter Student Name : ",(sname)=>{
        instance.question("Enter email : ",(email)=>{
            instance.question("Enter per : ",(per)=>{
                var qurey =' insert into student (sname,email,per) values(?,?,?)'
                var values = [sname,email,per]
                con.query(qurey,values,(error,result)=>{
                    if(error)
                        console.log(error);
                    else{
                        console.log("data inserted sucessfully");
                        showMenu();
                    }
                        
                })
            });
        });
    });
    // console.log("Add");
 }
  function updateStudent(){
    instance.question("Enter sid : ",(sid)=>{
        instance.question("Enter name : ",(sname)=>{
            instance.question("Enter email : ",(email)=>{
                instance.question("Enter per : ",(per)=>{
                var qurey =' update student set sname =?,email =?,per = ? where sid = ?'
                var values = [sname,email,per,sid]
                con.query(qurey,values,(error,result)=>{
                    if(error)
                        console.log(error);
                    else{
                        console.log("data updated sucessfully");
                        showMenu();
                    }    
                })
            });
            });
        });
    });
    // console.log("update");
 }
  function deleteStudent(){
     instance.question("Enter sid : ",(sid)=>{
        var qurey =' delete from student where sid = ?'
        var values = [sid]
        con.query(qurey,values,(error,result)=>{
            if(error)
                console.log(error);
            else{
                if(result.affectedRows > 0){
                    console.log("Record deleted successfully");
                }
                else{
                    console.log("Record not found");
                }
                showMenu()
            }    
        })
    });
    // console.log("delete");
 }
  function ViewAllStudent(){

        var qurey =' select * from student ;'
        con.query(qurey,(error,result)=>{
            if(error)
                console.log(error);
            else{
                console.table(result)        
                console.log("data showed sucessfully");
                showMenu();
            }    
        })
    // console.log("view all");
 }
  function viewSpecificStudent(){
    instance.question("Enter sid : ",(sid)=>{
        var qurey =' select * from student where sid = ?'
        var values = [sid]
        con.query(qurey,values,(error,result)=>{
            if(error)
                console.log(error);
            else{
                console.table(result) ;
                console.log("data showed sucessfully");
                showMenu();
            }    
        })
    });
    // console.log("view specific");
 }
