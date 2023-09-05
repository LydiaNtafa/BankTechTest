class BankAccount {

    #statement = [];
    #balance = 0;
    
    #balanceCalculation(amount) {
        this.#balance = amount + this.#balance;
    }

    #createTransaction(transaction, amount) {
        const currentDate = (new Date()).toLocaleDateString('en-GB');
        var action = ""
        if (transaction === "deposit") {
            this.#balanceCalculation(amount);
            action = `${currentDate} || || ${amount.toFixed(2)} || ${this.#balance.toFixed(2)}`;
        } else {
            this.#balanceCalculation(-amount);
            action = `${currentDate} || ${amount.toFixed(2)} || || ${this.#balance.toFixed(2)}`;
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
        return this.#createTransaction("deposit", amount);
    }

    withdrawal(amount){
        if (amount > this.#balance) {
            return `Cannot complete this transaction due to insufficient balance.`+
            ` Account balance: ${this.#balance.toFixed(2)}`
        }
        return this.#createTransaction('withdrawal', amount);
    }

};

module.exports = BankAccount;
