document.getElementById('btn-diposit').addEventListener('click', function(){
    

    const dipositField = document.getElementById('diposit-field');
    const dipositAmount = dipositField.value;
    console.log(dipositAmount);

    const dipositTotalElement = document.getElementById('diposit-value');
    const dipositTotal = dipositTotalElement.innerText;
    console.log(dipositTotal);

    dipositTotalElement.innerText = dipositAmount;
})