document.getElementById('donate-noakhali').addEventListener('click',function(e){
    e.preventDefault();
    const input = amount('input-noakhali')
    const finalInput = parseInt(input);
    const mainBalance = mainAmaount('main-balance')
    const finalMainBalance = parseInt(mainBalance);
    const mainBalanceNoakhali = mainAmaount('main-balance-noakhali')
    const finalmainBalanceNoakhali = parseInt (mainBalanceNoakhali)
    const historyText = mainAmaount('history-text-noakhali')
    const d = new Date("2015-03-25T12:00:00-06:30");
    if(finalInput<finalMainBalance && finalInput > 0 && Number(finalInput)){
        const remainingBalance = finalMainBalance - finalInput;
        const remainingBalanceNoakahali = finalmainBalanceNoakhali + finalInput
        document.getElementById('main-balance').innerText = remainingBalance
        document.getElementById('main-balance-noakhali').innerText = remainingBalanceNoakahali
        const p = document.createElement('p')
        p.innerText = `${finalInput} taka donate for ${historyText} ${d}`
        p.classList.add('border')
        document.getElementById('history-container').appendChild (p)
        
    }
    else{
        alert('Give a valid amount')
    }
    
    })
