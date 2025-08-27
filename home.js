const validPin = 1234;
const transactionData = []

// function to get input values number
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber;
}

// function to get value
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value

    return inputFieldValue;
}

// function to get innertext 
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber;
}

// function to set innertext
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}


// function toggle
function handletoggle(id){
    const forms = document.getElementsByClassName("form")
    for (const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// function to toggle button
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")
    for (const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-[#0808081A]")
    }
    document.getElementById(id).classList.remove("border-[#0808081A]")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}

function handleTitleToggle(id){
    const formTitles = document.getElementsByClassName("form-title")
    for (const title of formTitles){
        title.classList.remove("text-[#0874f2]")
        title.classList.add("text-[#080808b3]")
    }
    document.getElementById(id).classList.remove("text-[#080808b3]")
    document.getElementById(id).classList.add("text-[#0874f2]")
}
// add money feature
document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault()

    const bank = getInputValue("bank")
    const accountNumber = getInputValue("account-number")
    const amount = getInputValueNumber("add-amount")
    if (amount <= 0){
        alert("Invalid Amount")
        return;
    }
    const pinNumber = getInputValueNumber("pin-number")

    const availableBalance = getInnerText("available-balance")
    
    if(accountNumber.length < 11){
        alert("Invalid Account Number");
        return;
    }
    if(pinNumber !== validPin){
        alert("Invalid Pin Number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance
    setInnerText(totalNewAvailableBalance)

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)


})


// cash out feature
document.getElementById("withdraw-btn").addEventListener('click', function(e){
    e.preventDefault()

    const agentNumber = getInputValue("agent-number")
    if(agentNumber.length < 11){
        alert("Please provide valid agent number")
        return;
    }
    
    const amount = getInputValueNumber("withdraw-amount")
    const withdrawPin = getInputValueNumber("withdraw-pin")

    const availableBalance = getInnerText("available-balance")
    if (amount <= 0 || amount > availableBalance){
        alert("Invalid Amount")
        return;
    }


    if(withdrawPin !== validPin){
        alert("Please provide valid pin number")
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance)

    const data = {
        name: "Cashout",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

})

// transactions feature
document.getElementById("transactions").addEventListener("click", function() {
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for (const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mx-6 mb-3 bg-white py-3 px-4 rounded-xl border-1 border-[#0808081a] flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="p-3 bg-[#f4f5f7] rounded-full">
                        <img src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1 class="font-semibold text-[#080808b3]">${data.name}</h1>
                        <p class="text-xs text-[#080808b3]">${data.date}</p>
                    </div>
                </div>
                    
                <i class="fa-solid fa-ellipsis-vertical text-[#080808b3]"></i>
            </div>
        `
    
        transactionContainer.appendChild(div)
    }
})

// toggling feature
// document.getElementById("add-money-form").style.display = "none"
document.getElementById("add-money").addEventListener('click', function(){
    handletoggle("add-money-form")

    handleButtonToggle("add-money")

    handleTitleToggle("add-money-title")
})

document.getElementById("cash-out").addEventListener('click', function(){
    handletoggle("cash-out-form")

    handleButtonToggle("cash-out")

    handleTitleToggle("cash-out-title")
})
document.getElementById("transfer-money").addEventListener('click', function(){
    handletoggle("transfer-money-form")

    handleButtonToggle("transfer-money")

    handleTitleToggle("transfer-title")
})
document.getElementById("get-bonus").addEventListener('click', function(){
    handletoggle("get-bonus-form")

    handleButtonToggle("get-bonus")

    handleTitleToggle("get-bonus-title")
})
document.getElementById("pay-bill").addEventListener('click', function(){
    handletoggle("pay-bill-form")

    handleButtonToggle("pay-bill")

    handleTitleToggle("pay-bill-title")
})
document.getElementById("transactions").addEventListener('click', function(){
    handletoggle("transaction-form")

    handleButtonToggle("transactions")

    handleTitleToggle("transactions-title")
})

