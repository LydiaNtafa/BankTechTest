const Transaction = require("./Transaction");

class BankAccount {
    #balance = 0;
    #transactions = []
    
    #balanceCalculation(amount) {
        if ((this.#balance + amount) < 0) {
            throw new Error(`Cannot complete this transaction due to insufficient balance.`+
            ` Account balance: ${this.#balance.toFixed(2)}`)
        } else {
            this.#balance += amount;
        }
    }

    #validation(amount) {
        if ( amount == null) {
            throw new Error("Please enter the amount for the transaction")
        } 
        else if (typeof amount !='number') {
            throw new Error("Input type needs to be integer or float")
        }
    }
    
    printStatement() {
        const header = "date || credit || debit || balance"
        if (this.#transactions.length === 0){
            return header
        } else {
            const reversedArray = this.#transactions.map(transaction => transaction.format()).reverse();
            this.#transactions = [];
            return header+`\n`+`${reversedArray.join('\n')}`;
        }
    }

    deposit(amount) {
        try {
            this.#validation(amount);
            this.#balanceCalculation(amount);
        } catch (error) {
            return error.message;
        }
        this.#transactions.push(new Transaction("deposit", amount, this.#balance));
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }

    withdraw(amount) {
        try {
            this.#validation(amount);
            this.#balanceCalculation(-amount);
        } catch (error) {
            return error.message;
        }
        this.#transactions.push(new Transaction("withdraw", amount, this.#balance));
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }
        

}

module.exports = BankAccount;
