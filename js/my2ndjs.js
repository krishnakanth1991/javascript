
var parent= document.createElement("div");
parent.style.background="red";
parent.style.width="200px";
parent.style.height="200px";
parent.style.padding="20px";

document.body.appendChild(parent);

var child = document.createElement("span");

child.textContent="Dont Touch the red Button";
child.style.color="#fff";

parent.appendChild(child);

parent.addEventListener("click",function(){

  if(parent.style.width === "200px"){

    parent.style.width="100px";
  }else{

    parent.style.width="200px";
  }
})

console.log(parent);
