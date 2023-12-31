# Bank Tech Test - Lydia Ntafa

## Approaching the task and planning the program:
Reading the [specification](specification.md) I have decided that :
* This will be a multi-class program, as it needs to have the ability to store the data in memory. 
    * The **main class** will serve as a *BankAccount*, it will initialize with 0 balance and it will have public classes for the user to interact with like makeANewTransaction and printStetement.
    * Another class will be named *Transaction*, every instance of this class will represent a different transaction made (like deposit or withdraw) to manage the data being recorded.
    * The last class will be *Statement*, and it will be managing the output format and displaying the data to the user. 
* The program will be written in JavaScript and will be tested with Jest.

#### My design process:
**Writing the [class recipe](desingFiles/classRecipe.md)**
1. Created User Stories based on specifications.
2. Created a [class diagram](desingFiles/BankAccountDiagram.png) using the nouns and verbs extracted from the user stories.
3. Created a [sequence diagram](desingFiles/BankSequenceDiagram.svg) to visualize how the classes will interact with each other.
4. Created [Examples as Unit Tests](desingFiles/classRecipe.md#examples-as-unit-tests)
- 3a. Create an example as a unit test
- 3b. encode the example
- 3c. implement the behavior (red-green-refactor)
- 3d. Go back to 3a until all criteria and cases are met
4. Created [Examples as integration Tests](desingFiles/classRecipe.md#examples-as-intergation-tests)
- 4a. Create an example as an integration test
- 4b. encode the example
- 4c. implement the behavior (red-green-refactor)
- 4d. Go back to 4a until all criteria and cases are met
5. Run the usage example given in the acceptance criteria to make sure that the specifications are met exactly.

#### Code Structure:
The class BankAccount has 3 private fields:
<#balance> , <#transactions> and <#statements> 
so every instance of the class starts with those 3 variables initialized to 0 and [], and they can only be accessed and changed within the class.

The class BankAccount has 2 private methods:
<#balanceCalculation(amount)> and <#validateAmount(amount)> 
to help keep the quality of the code high, while ensuring that the sensitive features of the class are secure from misuse.

The class BankAccount has 3 public methods: 
printStatement(), deposit(amount) and withdraw(amount)

All the transactions made are instances of the class Transaction stored within the <#transactions> array with the date of the transaction that is calculated by obtaining the current date and formatting it as a string using the (English - United Kingdom) locale. 

When the user wants to print their bank statement a new instance of the class Statement that includes the transactions stored in the <#transactions> array, at the time, <#transactions> array will be cleared, theinstance will stored in the <#statements> array and the function will return a string

## How to Set Up Your Machine to be able to Run this Program
### 1. Install Node
If you haven't already have` Node.js` installed on your machine please follow the steps below.
First, you will need to install `nvm` - the Node Version Manager.
Running `nvm install node` and `nvm use
node` will automatically install and use the latest stable version.
NVM is distributed using GitHub - you can find installation instructions for the latest
version [here](https://github.com/nvm-sh/nvm#installing-and-updating). You'll need to run
a command that looks like this: 
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Once that step is complete, you'll need to reload your ~/.zshrc file:
```
source ~/.zshrc
```

Now, you can install Node using nvm:
```
nvm install node
nvm use node
```

If the above works, you should see something like this in your terminal (exact versions
might be different for you!): `Now using node v20.5.0 (npm v9.8.0)` - if something went
wrong, have a look at the [troubleshooting
section](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) or reach out to someone
for help.

## How to Run this Programm and its Tests 

### 1. Run the Program
#### 1. Clone this repository and enter the main directory
```
git clone https://github.com/LydiaNtafa/BankTechTest.git
cd 
```

#### 2. You should now be able to type `node` inside your terminal, to launch the node REPL:
```
node
Welcome to Node.js v16.6.0.
Type ".help" for more information.
> 
```
#### 3. Import the class by typing:
```
const BankAccount = require("./BankAccount");
```
#### 4. Now you can create new bank accounts. For example:
```
const Account1 = new BankAccount();
const Account2 = new BankAccount();
```
##### Available functions (withdraw(amount), deposit(amount), viewStatement())
for example:
```
Account2.deposit(100.6);
Account2.printStatement()
```
OR
```
Account1.deposit(1000);
Account1.deposit(2000);
Account1.withdraw(500);
Account1.printStatement()
```
#### 5. type `.exit` to exit the REPL

Here you can find a [Screenshot of Criteria Being Met](desingFiles/Screenshot-criteria-met.png)


### 2. Run the tests
#### 1. Make sure you are in the main directory of the Project

#### 2. Initialise Dependencies
Make sure you are in the main project directory.
```bash
# Initialise the NPM project (this will create a file package.json)
npm init -y

# Add the jest package to our project (this will update package.json and package-lock.json)
npm add jest

# Also install jest "globally" (this is so we can run the `jest` command)
npm install -g jest
```
#### 3. Run jest inside your terminal
```
jest
```
Here you can find a [Screenshot of Test Coverage](desingFiles/Screenshot-test-coverage.png)


