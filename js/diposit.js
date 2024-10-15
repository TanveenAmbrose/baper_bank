document.getElementById('btn-diposit').addEventListener('click', function(){
    

    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    const dipositTotalElement = document.getElementById('diposit-value');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    const currenDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = currenDipositTotal;
})