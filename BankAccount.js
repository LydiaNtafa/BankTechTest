class BankAccount {
    #statement = [];
    
    printStatement() {
        return `date || credit || debit || balance`;
    }

    deposit(amount) {
        amount = amount.toFixed(2);
        return `Transaction complete. New Account balance: ${amount}`
    }

    
};

module.exports = BankAccount;