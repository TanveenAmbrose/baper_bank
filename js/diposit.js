document.getElementById('btn-diposit').addEventListener('click', function(){
    

    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    const dipositTotalElement = document.getElementById('diposit-value');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    const currentDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = currentDipositTotal;

    const totalAmountField = document.getElementById('total-amount');
    const totalAmountElement = totalAmountField.innerText;
    const totalAmountNumber = parseFloat(totalAmountElement);

    const currentTotalAmount = totalAmountNumber + newDipositAmount;
    totalAmountField.innerText = currentTotalAmount;

})