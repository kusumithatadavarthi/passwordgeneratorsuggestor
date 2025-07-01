
/*
Main Logic
On clicking Generate Password:

Read input length.

Check which checkboxes are selected.

Build a string pool (e.g., ABCDabcd1234!@#).

Randomly pick characters from pool until password length is met.

Display the generated password in the input box.
*/
function generate(){
    let length=document.querySelector('#num').value;
    const output = document.getElementById("genpwd");
    if (length<5){
        alert('please choose more number of digits');
        return
    }
    else{
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$&*?!%";
    let allowed='';
    if(document.getElementById("cbox1").checked) allowed+=upper;
    if(document.getElementById("cbox2").checked) allowed+=lower;
    if(document.getElementById('cbox3').checked) allowed+=numbers;
    if(document.getElementById('cbox4').checked) allowed+=symbols;
    if (allowed===''){
        alert('please select atleast a checkbox')
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        let randIndex = Math.floor(Math.random() * allowed.length);
        password += allowed[randIndex];
    }
    output.value = password;


    }

}