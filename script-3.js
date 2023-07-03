

let setting1 = document.getElementById("sett-content1"); 
let go1 = document.getElementById("sett-go1") ;

// window.onscroll = () => {
//     window.scrollY ?  1000 >= setting1.classList.add("toright") : setting1.classList.remove("toright") ;

// }


setting1.onclick = () => {
        if( go1.style.opacity == "10" ){
            go1.style.opacity = "0";
          

        }else{
            go1.style.opacity = "10";
            go2.style.opacity = "0";
            go3.style.opacity = "0";
    }
}

// ******************************************************

let setting2 = document.getElementById("sett-content2"); 
let go2 = document.getElementById("sett-go2") ;

// window.onscroll = () => {
//     window.scrollY ?  1000 >= setting2.classList.add("toshow") : setting2.classList.remove("toshow") ;

// }


setting2.onclick = () => {
    if( go2.style.opacity == "10" ){
        go2.style.opacity = "0";
    }else{
        go1.style.opacity = "0";
        go2.style.opacity = "10";
        go3.style.opacity = "0";
}
}

// *********************************************************


let setting3 = document.getElementById("sett-content3"); 
let go3 = document.getElementById("sett-go3") ;

// window.onscroll = () => {
//     window.scrollY ?  1000 >= setting3.classList.add("toleft") : setting3.classList.remove("toleft") ;

// }

setting3.onclick = () => {
    if( go3.style.opacity == "10" ){
        go3.style.opacity = "0";
    }else{
        go1.style.opacity = "0";
        go2.style.opacity = "0";
        go3.style.opacity = "10";
}
}




let img = document.querySelector(".images");
window.onscroll = () => {
    window.scrollY ?  500&1000 < img.classList.add("toshow") : img.classList.remove("toshow") ;

}






let setting = document.querySelector(".sett-content");
window.onscroll = () => {
    window.scrollY ?  1000 <= setting.classList.add("toshow") : setting.classList.remove("toshow") ;

}


// *****************************************************************************************************************************
