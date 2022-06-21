const urlServer = "http://localhost:5050/fibonacci/" ;


document.getElementById("btn").addEventListener("click", fibonacciServer);


function fibonacciServer(){
    let userNum = document.getElementById("myText").value;
    let fullUrl= urlServer + userNum;
fetch(fullUrl)
.then(response => response.json ())
.then(data => { 
    document.getElementById("demo").innerText = data.result;
});


}



/* when i click on the buttoin it activate the function 

fibonacciServer(fullUrl);*/


/*

fibonacciServer(fullUrl);


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
*/




