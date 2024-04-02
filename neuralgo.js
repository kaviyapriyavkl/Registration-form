

function validateform()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var fileInput = document.getElementById('myFile');
    
    // if(fvalname(fname)) {
    //     if(lvalname(lname)) {
    //         if (eval(email)){
    //             if(pval(phone)){
    //                 if(aval(address)){return true;}
    //             }
    //         }
    //     }
    // }
    if (fvalname(fname) && lvalname(lname) && evalEmail(email) && pval(phone) && aval(address) && validateFileSize(fileInput)) {
        return true;
    }
    else{return false;}
}

function fvalname(fname)
{
    if(fname==="")
    {
        document.getElementById("ferr").innerHTML="Feild should not be empty";
        return false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(fname)) {
        document.getElementById("ferr").innerHTML = "First name should contain only letters and spaces";
        return false;
    } 
    else{
        document.getElementById("ferr").innerHTML="";
        return true;
    }
}

function lvalname(lname)
{
    if(lname==="")
    {
        document.getElementById("lerr").innerHTML="Feild should not be empty";
        return false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(lname)) {
        document.getElementById("lerr").innerHTML = "Last name should contain only letters and spaces";
        return false;
    } 
    else{
        document.getElementById("lerr").innerHTML="";
        return true;
    }
}


function evalEmail(email)
{
    if(email==="")
    {
        document.getElementById("eerr").innerHTML="Feild should not be empty";
        return false;
    }
    
    else{
        document.getElementById("eerr").innerHTML="";
        return true;
    }
}

function pval(phone)
{
    if(phone==="")
    {
        document.getElementById("perr").innerHTML="Feild should not be empty";
        return false;
    }
    else if (!/^[6-9]\d{9}$/.test(phone)) {
        document.getElementById("perr").innerHTML = "Numbers should not exceed 10 digits and recheck the inital number";
        return false;
      }
    else{
        document.getElementById("perr").innerHTML="";
        return true;
    }
}


function aval(address)
{
    if(address==="")
    {
        document.getElementById("aerr").innerHTML="Feild should not be empty";
        return false;
    }
    else if (address.length < 10) {
        document.getElementById("aerr").innerHTML="Please enter a valid address (minimum 10 characters)";
    }
    else{
        document.getElementById("aerr").innerHTML="";
        return true;
    }
}


function validateFileSize(fileInput) {
    const files = fileInput.files;
    const maxSize = 5 * 1024 * 1024; // 5 MB limit in bytes

    // Check for empty file selection
    if (!files.length) {
        document.getElementById("res").innerHTML = "Please select a file.";
        fileInput.value = '';
        return false;
    }

    // Loop through selected files
    for (let i = 0; i < files.length; i++) {
        if (files[i].size === 0) {
            document.getElementById("res").innerHTML = "Please select a non-empty file.";
            fileInput.value = '';
            return false;
        } else if (files[i].size > maxSize) {
            document.getElementById("res").innerHTML = "File size exceeds 5 MB limit. Please select a smaller file.";
            fileInput.value = '';
            return false;
        }
    }

    // No file exceeded the size limit, clear any previous error message
    document.getElementById("res").innerHTML = "";
    return true; // Indicate successful validation
}



// function validateFileSize(fileInput) {
//     const files = fileInput.files;
//     const maxSize = 5 * 1024 * 1024; // 5 MB limit in bytes
  
//     // Check for empty file selection
//     if (!files.length) {
//       document.getElementById("res").innerHTML = "Please select a file.";
//       fileInput.value = '';
//       return false;
//     }
  
//     // Loop through selected files
//     for (let i = 0; i < files.length; i++) {
//       if (files[i].size === 0) {
//         document.getElementById("res").innerHTML = "Please select a non-empty file.";
//         fileInput.value = '';
//         return false;
//       } else if (files[i].size > maxSize) {
//         document.getElementById("res").innerHTML = "File size exceeds 5 MB limit. Please select a smaller file.";
//         fileInput.value = '';
//         return false;
//       } else {
//         // File valid, clear any previous error message (optional)
//         document.getElementById("res").innerHTML = "";
//         return true; // Indicate successful validation
//       }
//     }
//   }
  
  