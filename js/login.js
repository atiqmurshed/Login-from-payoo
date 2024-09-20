// console.log('click the button');
document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault();
       
//step-3 get the phone number;
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);
//cheak the phone number temporiry;
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('your are login');
            window.location.href='/home.html';
        }
        else{
            alert('wrong phone number or pin');
        }

})


