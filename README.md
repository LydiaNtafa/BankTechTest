# Bank Tech Test - Lydia Ntafa

<!-- TODO before submitting-->
- [] Planning/ approach
    - Design Recipe
    - Class Diagram
    - Sequence Diagram (?)
- [] How to run the code
- [] How to run the tests
- [] screenshots of criteria being met
- [] screenshots of project running

## Planning 
Reading the acceptance critiria I have decided that:
* This will be a single-class program.
* The programm will be written in JavaScript and will be tested with Jest.

### Next steps are:
*writing the class recipe*
1. Writting User Stories
2. Creating a class diagram
3. Create an Example as a unit Test
3a. encode the example
3b. implement the behaviour (red-green-refactor)
3c. go back to 3
4.  Create an Example as an intergation Test
4a. encode the example
4b. implement the behaviour (red-green-refactor)
4c. go back to 4

All complementary files are included in the directory ./designFiles

## Running the Programm

### 1. Install Node
First install `nvm` - the Node Version Manager.
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

### 2. Run the program
<!-- #### 1. RUN node <name>.js
1a. may need to import function (?)
2. create a new account instance (not with a client name,maybe <account1>)
#### AVAILABLE functions (withdraw, deposit, viewStatement)
note about format?

Note about how to exit Node
-->

### 3. Run the tests
