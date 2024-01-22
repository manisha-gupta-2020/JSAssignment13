const $ = (id) => document.getElementById(id)
//global scope variables
let bank;


const bankAccount = function (ownerName){
    //local variables
    let balance,owner;
    balance = 0, owner = ownerName;

    return {
        balance,
        owner,
        withdrawal: function(withdrawlAmount){
            balance = balance - withdrawlAmount
            // console.log('in witdrawal' + balance)
        },
        deposit: function(depositAmount){
            balance = balance + depositAmount
            // console.log('in deposit' + balance)
        },
        getBalance: function(){
            //return value of variable balance
            return balance;
        },
        getOwnerName: function(){
            //return value of variable owner
            return owner;
        }
    }
}

const display = function(){
    let bal = bank.getBalance()
    let own = bank.getOwnerName()
    $('display').innerHTML = `${own} has a balance of: $ ${bal}.`
}

//event handlers 
$('uname').addEventListener('click',(e) =>{
    let userName = prompt('Enter your name: ')
    bank = new bankAccount(userName)
    display()
    // return bank;
})


$('deposit').addEventListener('click',(e) =>{
    let depositAmt = parseFloat(prompt('Enter deposit amount: '))
    //make sure amount is not empty and more than 0
    while(depositAmt <= 0 || isNaN(depositAmt)){
        depositAmt = parseFloat(prompt('Amount should be more than 0. Enter deposit amount: '))
    }
    // console.log('calling deposit amot')
    bank.deposit(depositAmt)
    display()
})

$('withdrawal').addEventListener('click',(e) =>{
    let withdrawalAMt = parseFloat(prompt('Enter withdrawal amount: '))
    //make sure amount is not empty and more than 0
    while(withdrawalAMt <= 0 || isNaN(withdrawalAMt)){
        withdrawalAMt = parseFloat(prompt('Amount should be more than 0. Enter withdrawal amount: '))
    }
    // console.log('calling withdrawal amot')
    bank.withdrawal(withdrawalAMt)
    display()
})

