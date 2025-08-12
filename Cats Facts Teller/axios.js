let url="https://catfact.ninja/fact";

let btn=document.querySelector("button");
let para=document.querySelector("p");
let Err_span=document.querySelector("#e");


btn.addEventListener("click", async ()=>{
    // let fact=await getFacts();
    // console.log(fact);
        getFacts();
    })
async function getFacts(){
    try{

        let res=await axios.get(url);
        para.innerHTML=res.data.fact;

    }
    catch(e){
        Err_span.innerHTML=e;
        Err_span.style.color="red";
    }
}
    