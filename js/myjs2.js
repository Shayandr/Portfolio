
// function dmenu() {
    
//     var sec = document.querySelector(".drop-menu");

//     if (sec.style.bottom == "0px") {
//         sec.style.zIndex = "-1";
    
        
//         var i = 0;
//         myint = setInterval(bup, 10);


//         function bup() {
//             if (i == 41) {
//                 clearInterval(myint);
//             } else {
//                 sec.style.bottom = i + "px";
//                 i++;
//             }

//         }

        
//     }else{

        
//         var i = 40;
//         myint = setInterval(bdown, 10);


//         function bdown() {
//             if (i == -1) {
//                 clearInterval(myint);
//                 sec.style.zIndex = "1";
                
//             } else {
//                 sec.style.bottom = i + "px";
//                 i--;
//             }
          
//         }
        
// }
// }


function dmenu() {
    debugger;
    var sec = document.querySelector("#dm");

    if (sec.className == "drop-menu drop-u") {
        sec.className = "drop-menu drop-d";
        sec.style.zIndex="5";
        sec.style.bottom = "0px";
        
    }else{

        sec.className = "drop-menu drop-u";  
        
        sec.style.bottom = "40px";
        setTimeout(()=>{sec.style.zIndex="-1";},1000);
        
}
}























