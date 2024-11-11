const button=document.querySelector('.gumb');

const form=document.getElementById("noviceForm");

button.addEventListener('click', function(){
    swal("Good job!", "You have successfully registered!", "success").then(() => {
        form.submit();
    });
});