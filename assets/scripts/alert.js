function contato () {
    const name = document.getElementById('name-input');
    const email = document.getElementById('email-input');
    const message = document.getElementById('messege-input');

    if (name.value != 0 && email.value != 0 && message.value !=0) {
        alert('Menssagem enviada');
    } 
}
 