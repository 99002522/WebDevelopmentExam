function validationForm(){
    var user = document.getElementById("uname").value;
    var pas = document.getElementById("pass").value; 
    var mail = document.getElementById("eid").value;
    var phone = document.getElementById("pnumber").value;
    var city = document.getElementById("ucity").value;

    if(user==""){
        alert("Enter your name");
        document.myform.username.focus();
    }
    else if(pas==""){
        alert("Enter your password");
        document.myform.password.focus();
    }
    else if(!(pas.match(/[a-z]/g) && 
    pas.match(/[A-Z]/g) && 
    pas.match(/[0-9]/g) && 
    pas.match(/[^a-zA-Z\d]/g))){
        alert("Password should contain 1 uppercase, 1 lowercase, digit, 1 special character");
    }
    else if(!(mail == "")){
        if(!(mail.match(/@/g))){
            alert("Please enter valid Email Id")
        }
    }
    else if(phone == ""){
        alert("Enter your phone number");
    }
    else if (phone.length < 10 || phone.length>10){
        alert("Please Enter valid phone number");
    }
    else if(city == ""){
        alert("Enter your city");
    }
    else{
        validateUser();
    } 
}

function validateUser(){
    var resname = ["Dhanashree", "Ram", "Seeta"];
    urname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<resname.length; i++)
        {
            if (!urname.localeCompare(resname[i])){
                alert("Username already exist, please give another one");
                flag = 0;
                break;
            }
            else{
                flag = 1;
            }
        }
        if (flag == 1){
        resname.push(urname);
        alert("Registration is successful");
        document.myform.submit();
        }  
}

