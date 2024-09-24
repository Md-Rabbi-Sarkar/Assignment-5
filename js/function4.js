document.getElementById('donate-feni').addEventListener('click',function(e){
    e.preventDefault();
    const input = amount('input-feni')
    const finalInput = parseInt(input);
    const mainBalance = mainAmaount('main-balance')
    const finalMainBalance = parseInt(mainBalance);
    const mainBalanceFeni = mainAmaount('main-balance-feni')
    const finalmainBalanceFeni = parseInt(mainBalanceFeni)
    const historyText = mainAmaount('history-text-feni')
    const d = new Date("2015-03-25T12:00:00-06:30");
    if(finalInput<finalMainBalance && finalInput > 0 && Number(finalInput)){
        const remainingBalance = finalMainBalance - finalInput;
        const remainingBalanceFeni = finalmainBalanceFeni + finalInput
        document.getElementById('main-balance').innerText = remainingBalance
        document.getElementById('main-balance-feni').innerText = remainingBalanceFeni
        const p = document.createElement('p')
        p.innerText = `${finalInput} taka donate for ${historyText} ${d}`
        p.classList.add('border')
        document.getElementById('history-container').appendChild (p)
    }
    else{
        alert('Give a valid amount')
    }
})