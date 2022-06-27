const urlServer = "http://localhost:5050/fibonacci/" ;
const urlResultsServer = "http://localhost:5050/getFibonacciResults " ;


document.getElementById("btn").addEventListener("click", fibonacciServer );
let errorMesage = document.getElementById("error");

//document.getElementById("btn").addEventListener("click", spinner);

function spinnerOn() {
    var element = document.getElementById("spiner");
    element.classList.add("d-block")
    element.classList.remove("d-none");
 }
 function spinnerOff() {
    var element = document.getElementById("spiner");
    element.classList.add("d-none");
 }

 function resultServer(){

    let resultServerVar = document.getElementById("resultServer");

    fetch(urlResultsServer)
    .then(response => response.json ())
    .then(data => {
        let boxResult = data.results;
        let text = "";
       //const sorted = data.results.sort((a, b) => a.createdDate - b.createdDate)
        for (let i = 0; i < boxResult.length; i++){
           
            text +=  `<p class="py-3 border1">The Fibonacci Of <strong>${boxResult[i].number}</strong> is <strong>${boxResult[i].result}</strong> calculated at <strong>${new Date(boxResult[i].createdDate)}</strong></p> `;

    
            document.getElementById("resultServer").innerHTML = text

         console.log(resultServerVar)
      
            
        }
    }
    )
}



window.onload = () => {
 resultServer()
 spinnerOff()}

function fibonacciServer(){

    let userNum = document.getElementById("myText").value;
    let demo = document.getElementById("demo");
    let error42 = document.getElementById("error42");
    let error0 = document.getElementById("error0");
 

    if(userNum>50){
        demo.innerHTML = ``;
        error0.innerHTML = ``;
        error42.innerHTML = ``;
        errorMesage.innerHTML += `<p class="error p-1 m-0 rounded mt-3">Cant be larger than 50</p>`;
    } 
      else if (userNum == 42){
        demo.innerHTML = ``;
        error0.innerHTML = ``;
        errorMesage.innerText = ``;
        error42.innerHTML += `<p style=" color: #D9534F;">Server Error: 42 is the meaning of life</p>`;  
    }  
      else if (userNum <= 0){
        error42.innerHTML = ``;
        demo.innerHTML = ``;
        errorMesage.innerText = ``;
        error0.innerHTML += `<p style=" color: #D9534F;" >Server Error</p>`;
    }
        else {
        error0.innerHTML = ``;
        error42.innerHTML = ``;
        errorMesage.innerText = ``;
        let fullUrl= urlServer + userNum;
        spinnerOn()
        fetch(fullUrl)
        .then(response => response.json ())
        .then(data => { 
        spinnerOff()
        document.getElementById("demo").innerText = data.result;
        
        resultServer()
        });
    }
}
