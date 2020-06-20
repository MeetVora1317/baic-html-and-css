var imageN1 =document.querySelectorAll('.trip-image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal(){
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}
function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

for(i=0; i < imageN1.length;i++){
    imageN1[i].addEventListener('click',openModal);
}


backdrop.addEventListener('click',closeModal)