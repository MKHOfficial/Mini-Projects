let url="https://catfact.ninja/fact";
// console.log("it will take 3 seconds to display the result");
// setTimeout(()=>{
//     console.log("It will take 1 seconds ");
// },500);
let btn=document.querySelector("button");
let para=document.querySelector("p");
let Err_span=document.querySelector("#e");


    btn.addEventListener("click",()=>{
         fetch(url)
        .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data.fact);
        para.innerHTML=data.fact;
        
    })
    .catch((err)=>{
        console.log("Error is : ",err);
        Err_span.innerHTML="Something went wrong";
        Err_span.style.color="Red";
    })
    })



