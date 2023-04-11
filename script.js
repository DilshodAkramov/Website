// BUTTON TO TOP //
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        toTop.classList.add('active');
        
    } else {
        toTop.classList.remove('active');
    }
})


// DARK THEME //
// var icon = document.getElementById("icon");

// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme");
//     if(
//         document.body.classList.contains("dark-theme")){
//             icon.src = "images/sun.png";
//         }else{
//             icon.src = "images/moon.png";
//         }
// }

// PRE LOADER //
//var loader = document.getElementById("preLoader");
//window.addEventListener("load", function(){
   // loader.style.display = "none";
//})

