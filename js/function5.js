document.getElementById('donate-quota').addEventListener('click',function(e){
    e.preventDefault();
    const input = amount('input-quota')
    const finalInput = parseInt(input);
    const mainBalance = mainAmaount('main-balance')
    const finalMainBalance = parseInt(mainBalance);
    const mainBalanceQuota = mainAmaount('main-balance-quota')
    const finalmainBalanceQuota = parseInt(mainBalanceQuota)
    const historyText = mainAmaount('history-text-quota')
    const d = new Date("2015-03-25T12:00:00-06:30");
    if(finalInput<finalMainBalance && finalInput > 0 && Number(finalInput)){
        const remainingBalance = finalMainBalance - finalInput;
        const remainingBalanceQuota = finalmainBalanceQuota + finalInput
        document.getElementById('main-balance').innerText = remainingBalance
        document.getElementById('main-balance-quota').innerText = remainingBalanceQuota
        const p = document.createElement('p')
        p.innerText = `${finalInput} taka donate for ${historyText} ${d}`
        p.classList.add('border')
        document.getElementById('history-container').appendChild (p)
    }
    else{
        alert('Give a valid amount')
    }
})