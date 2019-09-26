/* function displayCounter() stores user count locally and increments it for every new visitor of the site. */
function displayCounter(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
        localStorage.clickcount = 1;
        }
        document.getElementById("userCount").innerHTML = "User count: " + localStorage.clickcount +"&nbsp;&nbsp;&nbsp;";
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
/* function validateData() validates the employee data and alerts if empty or incorrect data is entered */
function validateData()
{
   if(document.getElementById("fName").value == "")
    {
        alert("Please enter First Name");
        return false;
    }
    if(document.getElementById("lName").value == "")
    {
        alert("Please enter Last Name");
        return false;
    }    
    if(document.getElementById("desig").value == "")
    {
        alert("Please enter Designation");
        return false;
    }
    if(document.getElementById("company").value == "")
    {
        alert("Please enter Company");
        return false;
    }
    if(document.getElementById("phNo").value == "")
    {
        alert("Please enter Mobile");
        return false;
    }
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!document.getElementById("phNo").value.match(phoneno))
    {
        alert("Please enter a valid Mobile Number - It may contain numbers, '.' or '-'");
        return false;
    }
    if(document.getElementById("email").value == "")
    {
        alert("Please enter Email");
        return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
    {
        alert("Please enter a valid Email address");
        return false;
    }
    displayBC();
}
/* displayBC() function retrieves values from employee object and create the business card with those values */
function displayBC() {                    
    var employee = {};
    employee.fname = document.getElementById("fName").value;
    employee.lname = document.getElementById("lName").value;
    employee.phNo  = document.getElementById("phNo").value;
    employee.email = document.getElementById("email").value;
    employee.desig = document.getElementById("desig").value;
    employee.phone = document.getElementById("phNo").value;
    employee.company = document.getElementById("company").value;
    
    var cardHTML="<div class='card'> <div class='container'> <p><h4><b><label>" + employee.fname + "</label><label>&nbsp;"+employee.lname+"</label></b></h4>"+employee.desig+"</p><p> "+employee.company+"</br>           Email:"+employee.email+"</br>                   Ph: "+employee.phNo+"</p>                 </div>               </div>"
    document.getElementById("demo").innerHTML = cardHTML; 
    hideControlsForBC();
}

/* hideControlsForBC() function disables elements for displaying the business card*/
function hideControlsForBC() {
    document.getElementById("myForm").style.visibility = "hidden";
    document.getElementById("demo").style.visibility = "visible";
    document.getElementById("buttonDisplayBC").style.visibility = "hidden";
    document.getElementById("h2Val").style.visibility = "hidden";
    document.getElementById("h3Val").style.visibility = "hidden";
    var element = document.getElementById("myForm");
    element.parentNode.removeChild(element);
    element = document.getElementById("buttonDisplayBC");
    element.parentNode.removeChild(element);
    element = document.getElementById("h2Val");
    element.parentNode.removeChild(element);
    element = document.getElementById("h3Val");
    element.parentNode.removeChild(element);
}