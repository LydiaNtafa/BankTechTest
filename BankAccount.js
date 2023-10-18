const Transaction = require("./Transaction");
const Statement = require("./Statement");

class BankAccount {
    #balance = 0;
    #transactions = []
    #statements = []
    
    #balanceCalculation(amount) {
        if ((this.#balance + amount) < 0) {
            throw new Error(`Cannot complete this transaction due to insufficient balance.`+
            ` Account balance: ${this.#balance.toFixed(2)}`)
        } else {
            this.#balance += amount;
        }
    }

    #validateAmount(amount) {
        if ( amount == null) {
            throw new Error("Please enter the amount for the transaction")
        } 
        else if (typeof amount !='number') {
            throw new Error("Input type needs to be integer or float")
        }
    }
    
    printStatement() {
        const statement = new Statement(this.#transactions)
        this.#statements.push(statement)
        this.#transactions = [];
        return statement.print()
    }

    deposit(amount) {
        try {
            this.#validateAmount(amount);
            this.#balanceCalculation(amount);
        } catch (error) {
            return error.message;
        }
        this.#transactions.push(new Transaction("deposit", amount, this.#balance));
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }

    withdraw(amount) {
        try {
            this.#validateAmount(amount);
            this.#balanceCalculation(-amount);
        } catch (error) {
            return error.message;
        }
        this.#transactions.push(new Transaction("withdrawal", amount, this.#balance));
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }
}

module.exports = BankAccount;
