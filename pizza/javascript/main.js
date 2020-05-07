/*console.log("hola mundo desde un archivo extrno de java script");

// DOM 
// querySelector    /       querySelectorAll
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link); 
    
});

let celdas = document.querySelectorAll("td");
    
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log("Click")
    })
})


let closes = document.querySelectorAll(".close");

closes.forEach(function(close){
    close.addEventListener("Click",function(){
        console.log("Click")
    })
});

let iconos = document.querySelectorAll("i");

    iconos.forEach(function(icono){
        icono.classList.remove("fa-star-o");
      
    })

    let links = document.querySelectorAll(".close");

    links.forEach(function(link){   

        link.addEventListener("click",function(ev){
            ev.preventDefault();
            
            
           
            return false;   
            let content = document.querySelector(".content");

            //quitamos las clases de animacion que ya tienen
             content.classList.remove("fadeInDown");    
             content.classList.remove("animated");
            
            //agregamos clases para animar la   salida con FadeOutuP
            content.classList.add("fadeOutUp");
            content.classList.add("animated");
            setTimeout(function(){
                location.href= "/";
            },1000);
        
        })
    })
  
    */
