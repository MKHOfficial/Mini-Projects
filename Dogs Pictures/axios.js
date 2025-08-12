let url="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
let img=document.querySelector("#data");
let Err_span=document.querySelector("#e");


btn.addEventListener("click", async ()=>{
    
    let link=await getFacts();
    img.setAttribute("src", link);
    console.log(link)
    })
async function getFacts(){
    try{

        let res=await axios.get(url);
        return res.data.message;
    }
    catch(e){
        Err_span.innerHTML="Image not found";
        Err_span.style.color="red";
    }
}
    