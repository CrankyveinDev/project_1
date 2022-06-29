var cont1=document.getElementsByClassName("cont1")[0];
var cont2=document.getElementsByClassName("cont2")[0];
var checkIcon=document.getElementById("check-circle");
var xIcon=document.getElementById("x-circle");
var i=0;
var dragvalue;

xIcon.addEventListener("click",function(){
    typeNote();
})
checkIcon.addEventListener("click",function(){
    createNote();
})

function typeNote(){
   if(cont2.style.display=="none"){
    cont2.style.display="block"
   }else{
    cont2.style.display="none";
   }
}
function createNote(){
    var noteText=document.getElementById("note-Text").value;
    var node0=document.createElement("div");
    var node1=document.createElement("h1");

    node1.innerHTML=noteText;
    node1.style.margin=margin();
    node1.style.background=color();
    node0.appendChild(node1);
    var m=Math.floor(Date.now() / 1000);
    node1.id=m;
    node1.className="dragnote";
    node1.draggable="true";

    cont1.insertAdjacentElement("beforeend",node0);

    node0.addEventListener("mouseenter",function(){
        node0.style.transform="scale(1.2)";
    })
    node0.addEventListener("mouseleave",function(){
        node0.style.transform="scale(1)";
    })
    
    
    node0.addEventListener("dblclick",function(){
        node0.remove();
    })

    document.getElementById("note-Text").value='';
    
}

function margin(){
 var random_margin =["20px"];
 return random_margin[0]
}



function color(){
    var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    if(i>=random_colors.length-1){
        i=0;
    }
    return random_colors[i++];
}
