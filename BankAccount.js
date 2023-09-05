class BankAccount {
    #statement = [];
    #balance = 0;
    
    printStatement() {
        if (this.#statement.length === 0){
            return "date || credit || debit || balance"
        }
        return `date || credit || debit || balance\n`+`${this.#statement}`;
    }

    deposit(amount) {
        this.#balance = amount + this.#balance;
        const action = `05/10/2023 || || ${amount.toFixed(2)} || ${this.#balance.toFixed(2)}`;
        this.#statement.push(action);
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }

    
};

module.exports = BankAccount;