const url="https://catfact.ninja/fact";
var b1=document.getElementById("fact");
var p1=document.getElementById("para");
const f1 = async () => {
    let resp=await fetch(url);
    let data=await resp.json();
    var text=data.fact;
    p1.innerHTML=text;
    }
