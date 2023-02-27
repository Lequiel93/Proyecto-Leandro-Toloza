
let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');


hideText_btn.addEventListener('click',toggleText);


function toggleText(){

 hideText.classList.toggle('show');

 if (hideText.classList.toggle('hide')) {
    hideText_btn.innerHTML = 'Información adicional'
 } 
 else {
    hideText_btn.innerHTML = 'Ocultar informacion adicional'
 }

}