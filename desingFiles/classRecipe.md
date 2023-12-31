# User Stories
As a user
So I can save money
I want to be able to deposit money into my bank account

As a user
So I can use my money
I want to be able to withdraw money from my bank account

As a user
So I can keep track of my bank account
I want to be able to print my bank statement with details of deposits, withdraws, when did they happen, the amount that was involved and my account's balance

nouns: money, bank account, bank statement, deposits, withdraws, dates, amount, balance
verbs: save/deposit, use/withdraw, keep track, print

# Class Diagram
![Class Diagram](BankAccountDiagram.png)

# Examples as Unit Tests
```
When a new account is created
the bank statement should be an empty array
```

```
When a new account is created 
and the printed statement should look like this
date || credit || debit || balance
*this is an assumption on dev's part that this how the empty statement will be displayed, it can easily be changed/deleted*
```

```
When a new account is created 
the user can make a deposit
and receive a confirmation message "Transaction complete. New account balance: <balance>"
*the confirmation message is an assumption on dev's part and can easily be changed/deleted*
```

```
When a new account is created 
the user cannot make a withdrawal (since the balance = 0)
and will receive an error message "Cannot complete this transaction due to insufficient balance. Account balance: <balance>"
*the error message is an assumption on dev's part and can easily be changed/deleted*
```

```
The user can a withdrawl if their balance is sufficient
They will receive a confirmation message "Transaction complete. New account balance: <balance>"
*the confirmation message is an assumption on dev's part and can easily be changed/deleted*
```

# Examples as Intergation Tests
```
When a new account is created 
the user can make a deposit
the deposit will be recorded on the statement when printed
```

```
When a new account is created 
the user can make a deposit and a withdrawal
the deposit and the withdrawal will be recorded on the statement when printed
```