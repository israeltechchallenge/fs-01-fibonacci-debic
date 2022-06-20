
function fibonacci(){

    let x = document.getElementById("myText").value;

    let num1= 0;
    let num2= 1;
    let num3;
    
    for (i = 2; i <= x; i++){
    num3= num1 + num2;
    num1 = num2;
    num2 = num3;

    }
    
    document.getElementById("demo").innerHTML = num3;

    return num3;
}


