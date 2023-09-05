# Bank Tech Test - Lydia Ntafa

<!-- TODO before submitting-->
- [x] Planning/ approach
    - Design Recipe
    - Class Diagram
- [] How to run the code
- [] How to run the tests
- [] screenshots of criteria being met
- [] screenshots of project running
- [] add Table of Contents with links

## Approaching the task and planning the program 
Reading the acceptance critiria I have decided that:
* This will be a single-class program, as it needs to have the ability to store the data in memory (probably in an instance of a BankAccount class).
* The programm will be written in JavaScript and will be tested with Jest.
* The class will be storing the depositing and withdrawal actions within an object.
* The class will be have at least 3 methods(deposit(add),withdraw(subtrack), viewStatement(read))

### Design process:
*Writing the [class recipe](designFiles/classRecipe.md) *
1. Writting User Stories based on specifications.
2. Creating a [class diagram](designFiles/BankAccountClassDiagram.png) using the nouns and verbs extracted from the user stories.
3. Create an [Examples as Unit Tests](designFiles/classRecipe.md#Examples-as-Unit-Tests)
- 3a. create an example as a unit test
- 3b. encode the example
- 3c. implement the behaviour (red-green-refactor)
- 3d. go back to 3a until all criteria and cases are met
4.  Create [Examples as intergation Tests](designFiles/classRecipe.md#Examples-as-Intergation-Tests)
- 4a. create an example as an intergration test
- 4b. encode the example
- 4c. implement the behaviour (red-green-refactor)
- 4d. go back to 4a until all criteria and cases are met

## How to Set Up Your Machine to be able to Run this Program

### 1. Install Node
If you haven't already have Node.js installed on your machine please follwo the steps below.
First you will need to install `nvm` - the Node Version Manager.
Running `nvm install node` and `nvm use
node` will automatically install and use the latest stable version.
NVM is distributed using github - you can find installation instructions for the latest
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
$ nvm install node
$ nvm use node
```

If the above works, you should see something like this in your terminal (exact versions
might be different for you!): `Now using node v20.5.0 (npm v9.8.0)` - if something went
wrong, have a look at the [troubleshooting
section](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) or reach out to someone
for help.

<!-- MIGHT NOT NEED TO DO THIS IF I UPLOAD WITH package.JSON -->
### 2. Initialise Depedencies
Make sure you are on the main project directory.
```bash
# Initialise the NPM project (this will create a file package.json)
$ npm init -y

# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest
```

## How to Run this Programm and its Tests 

### 1. Run the Program
<!-- #### 1. RUN node <name>.js
1a. may need to import function (?)
2. create a new account instance (not with a client name,maybe <account1>)
#### AVAILABLE functions (withdraw, deposit, viewStatement)
note about format?

Note about how to exit Node
-->

#### screenshots of criteria being met

### 2. Run the tests
```
jest
```
<!-- edge cases that were taken into consideration -->

#### screenshots of the test coverage