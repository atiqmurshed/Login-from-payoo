//add money to handler
//step-1: add and event handler to the add money button inside the from

/*
step-1: add event handler prevent page reload after from submit;
step-2: get money to be to the account balance



*/

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    //prevent page reload after from submit
    event.preventDefault();
   
    //step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin number;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);


})



