class BankAccount {

    #statement = [];
    #balance = 0;
    
    #balanceCalculation(amount) {
        this.#balance = amount + this.#balance;
    }

    #createTransaction(transaction, amount) {
        const todaysDate = (new Date()).toLocaleDateString('en-GB');
        var action = ""
        if (transaction === "deposit") {
            this.#balanceCalculation(amount);
            action = `${todaysDate} || ${amount.toFixed(2)} || || ${this.#balance.toFixed(2)}`;
        } else {
            this.#balanceCalculation(-amount);
            action = `${todaysDate} || || ${amount.toFixed(2)} || ${this.#balance.toFixed(2)}`;
        }
        this.#statement.push(action);
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }
    
    printStatement() {
        const header = "date || credit || debit || balance"
        if (this.#statement.length === 0){
            return header
        }
        return header+`\n`+`${this.#statement.reverse().join('\n')}`;
    }

    deposit(amount) {
        if ( amount == null) {
            return "Please enter the amount you want to deposit"
        } 
        if (typeof amount !='number') {
            return "Input type needs to be integer or float"
        }
        return this.#createTransaction("deposit", amount);
    }

    withdraw(amount){
        if ( amount == null) {
            return "Please enter the amount you want to withdraw"
        } 
        if (typeof amount !='number') {
            return "Input type needs to be integer or float"
        }
        if (amount > this.#balance) {
            return `Cannot complete this transaction due to insufficient balance.`+
            ` Account balance: ${this.#balance.toFixed(2)}`
        }
        return this.#createTransaction('withdrawal', amount);
    }

};

module.exports = BankAccount;
