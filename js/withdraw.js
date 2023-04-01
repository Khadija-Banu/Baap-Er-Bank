// step-1: Add event listener to the deposit button
document.getElementById('withdraw-btn').addEventListener('click',function(){
  
    // step-2:get the deposit amount from the deposit input field
    // for input field use .value to the value inside input field
    const newWithdrawInputField=document.getElementById('withdraw-input-field');
    const newWithdrawFieldString=newWithdrawInputField.value;
    const newWithdrawAmount=parseFloat(newWithdrawFieldString);
    
    // step-3: get the current deposit total
    // for non input field to use inertext to the get text
    const previousWithdrawField=document.getElementById('withdraw-total');
    const previousWithdrawFieldString=previousWithdrawField.innerText;

    // get string text to change float number
    const previousWithdrawAmount=parseFloat(previousWithdrawFieldString);

  // step-4: add two number and set total deposit number
    const currentWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
    previousWithdrawField.innerText=currentWithdrawTotal;

    // step-5: get the current balance total
       // for non input field to use inertext to the get text
    const previousBalanceField=document.getElementById('balance-total');
    const previousBalanceFieldString=previousBalanceField.innerText;

      // get string text to change float number
    const previousBalanceAmount=parseFloat(previousBalanceFieldString);

      // step-6: add two number and set total balance number
    const currentBalanceTotal=previousBalanceAmount-newWithdrawAmount;
    previousBalanceField.innerText=currentBalanceTotal;

    // step-7:clear the deposit input field 
newWithdrawInputField.value=''

})