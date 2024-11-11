const alert = document.querySelector('.alert');
const alertIme = document.querySelector('.AlertIme');
const imeField = document.getElementById("ime");
const danField = document.getElementById("dan");
const mesecField = document.getElementById("mesec");
const letoField = document.getElementById("leto");

const radioAlert=document.querySelector('.RadioAlert');

const M =document.getElementById("M");
const Z =document.getElementById("Z");
const NP =document.getElementById("NP");
const O =document.getElementById("O");
const PN =document.getElementById("PN");

const form=document.getElementById("noviceForm");

const noviceForm = document.getElementById("noviceForm");
noviceForm.onsubmit = (e) => {

const options = document.querySelectorAll('input[type="radio"]');
const isChecked = Array.from(options).some(option => option.checked);

    if(imeField.value == '') {
        e.preventDefault();
        imeField.classList.add("invalid");
        alertIme.classList.add('displayBlock');
    }else{
        e.preventDefault();
        imeField.classList.remove("invalid");
        alertIme.classList.remove('displayBlock');
    }
    if(danField.value == '' || letoField.value == '' ||  mesecField.value ==''){
        danField.classList.add("invalid");
        mesecField.classList.add("invalid");
        letoField.classList.add("invalid");
        e.preventDefault();
        alert.classList.add('displayBlock');
    }else{
        danField.classList.remove("invalid");
        mesecField.classList.remove("invalid");
        letoField.classList.remove("invalid");
        alert.classList.remove('displayBlock');
    }

    if(M.checked || Z.checked || NP.checked || O.checked || PN.checked){
        radioAlert.classList.remove("displayBlock");
        
    }else{
        e.preventDefault();
        radioAlert.classList.add("displayBlock");
    }

    if(imeField.value !== ''&& danField.value !== '' && letoField.value !== '' &&  mesecField.value !==''&&( M.checked || Z.checked || NP.checked || O.checked || 
        PN.checked)){
        form.submit();
    }

};