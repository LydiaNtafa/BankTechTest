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
! [Class Diagram] (BankAccountClassDiagram.png)

# Examples as Test
```
When a new account is created
the bank statement should be an empty array
```

```
When a new account is created 
and the printed statement should look like this
date || credit || debit || balance
```

```
```