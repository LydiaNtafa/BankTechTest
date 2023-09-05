class BankAccount {
    #statement = [];
    #balance = 0;
    

    #balanceCalculation(amount) {
        this.#balance = amount + this.#balance;
    }
    
    printStatement() {
        if (this.#statement.length === 0){
            return "date || credit || debit || balance"
        }
        return `date || credit || debit || balance\n`+`${this.#statement}`;
    }

    deposit(amount) {
        this.#balanceCalculation(amount)
        var currentDate = (new Date()).toLocaleDateString('en-GB')
        const action = `${currentDate} || || ${amount.toFixed(2)} || ${this.#balance.toFixed(2)}`;
        this.#statement.push(action);
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }

    withdrawal(amount){
        return `Cannot complete this transaction due to insufficient balance. Account balance: ${this.#balance.toFixed(2)}`
    }

};

module.exports = BankAccount;