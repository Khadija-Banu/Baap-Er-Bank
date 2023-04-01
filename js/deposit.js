// step-1: Add event listener to the deposit button
document.getElementById('diposit-btn').addEventListener('click',function(){
  
    // step-2:get the deposit amount from the deposit input field
    // for input field use .value to the value inside input field
    const newDepositInputField=document.getElementById('deposit-input-field');
    const newDepositFieldString=newDepositInputField.value;
    const newDepositAmount=parseFloat(newDepositFieldString);
    
    // step-3: get the current deposit total
    // for non input field to use inertext to the get text
    const previousDepositField=document.getElementById('deposit-total');
    const previousDepositFieldString=previousDepositField.innerText;

    // get string text to change float number
    const previousDepositAmount=parseFloat(previousDepositFieldString);

  // step-4: add two number and set total deposit number
    const currentDepositTotal=previousDepositAmount+newDepositAmount;
    previousDepositField.innerText=currentDepositTotal;

    // step-5: get the current balance total
       // for non input field to use inertext to the get text
    const previousBalanceField=document.getElementById('balance-total');
    const previousBalanceFieldString=previousBalanceField.innerText;

      // get string text to change float number
    const previousBalanceAmount=parseFloat(previousBalanceFieldString);

      // step-6: add two number and set total balance number
    const currentBalanceTotal=previousBalanceAmount+newDepositAmount;
    previousBalanceField.innerText=currentBalanceTotal;

    // step-7:clear the deposit input field 
newDepositInputField.value=''

})