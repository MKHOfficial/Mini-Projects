let url="https://icanhazdadjoke.com/";

let btn=document.querySelector("button");
let para=document.querySelector("p");
let Err_span=document.querySelector("#e");


btn.addEventListener("click", async ()=>{
    let joke=await getJoke();
    para.innerHTML=joke;
    console.log(joke)
    })
async function getJoke(){
    try{
        const config={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
       return res.data.joke;  

    }
    catch(e){
        Err_span.innerHTML=e;
        Err_span.style.color="red";
    console.log(e);
    }
}
