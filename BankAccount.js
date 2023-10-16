const Transaction = require("./Transaction");

class BankAccount {
    #balance = 0;
    #transactions = []
    
    #balanceCalculation(amount) {
        this.#balance = amount + this.#balance;
    }
    
    printStatement() {
        const header = "date || credit || debit || balance"
        if (this.#transactions.length === 0){
            return header
        } else {
            const reversedArray = [];
            this.#transactions.slice().reverse().forEach(transaction => reversedArray.push(transaction.format()));
            this.#transactions = [];
            return header+`\n`+`${reversedArray.join('\n')}`;
        }
    }

    deposit(amount) {
        if ( amount == null) {
            return "Please enter the amount you want to deposit"
        } 
        else if (typeof amount !='number') {
            return "Input type needs to be integer or float"
        }
        else {
            this.#balanceCalculation(amount);
            this.#transactions.push(new Transaction("deposit", amount, this.#balance));
            return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
        }
    }

    withdraw(amount){
        if ( amount == null) {
            return "Please enter the amount you want to withdraw"
        } 
        else if (typeof amount !='number') {
            return "Input type needs to be integer or float"
        }
        else if (amount > this.#balance) {
            return `Cannot complete this transaction due to insufficient balance.`+
            ` Account balance: ${this.#balance.toFixed(2)}`
        }
        else {
            this.#balanceCalculation(-amount);
            this.#transactions.push(new Transaction("withdraw", amount, this.#balance));
            return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
        }
        
    }

}

module.exports = BankAccount;
