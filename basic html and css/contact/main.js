var inputname = document.getElementById('input-name');
var inputmail = document.getElementById('input-mail');
var inputmessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');

var form = document.querySelector('.form')

var  regEx = /\S+@\S+\.\S+/;
function checkInput(){
    if(inputname.value.trim() !== "" && inputmessage.value.trim() !== "" && regEx.test(inputmail.value) ){
        button.style.backgroundColor = '#fa9237';
        button.disabled = false;
    }else{
        button.style.backgroundColor = '#979695';
        button.disabled = true;
    }
}
form.addEventListener('submit',function(event){
        event.preventDefault();
        console.log('Submitted');
})