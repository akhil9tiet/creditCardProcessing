# Basic Credit Card Processing

Imagine that you're writing software for a credit card provider. Implement a program that will add new credit card accounts process charges and credits against them, and display summary information.

## Requirements:

-   Code should work when tested on macOS/Linux terminal
-   **Commands**

    -   **Add**: new credit card for a given name, card number, and **limit**
        -   Card numbers should be validated using Luhn 10
        -   New cards start with a \$0 balance
    -   **Charge**: will increase the **balance** of the card associated with the provided name by the amount specified
        -   Charges that would raise the balance over the limit are ignored as if they were declined
        -   Charges against Luhn 10 invalid cards are ignored
    -   **Credit**: will decrease the **balance** of the card associated with the provided name by the amount specified
        -   Credits that would drop the balance below \$0 will create a negative balance
        -   Credits against Luhn 10 invalid cards are ignored

-   The summary should include the name of each person followed by a colon and
    balance.
-   The names should be displayed alphabetically.
-   Display "error" instead of the balance if the credit card number does not pass
    Luhn 10.

## An overview of your design decisions

-   ### Why you picked the programming language you used

    I picked JavaScript for development NodeJS Javascript runtime environment for development as that is the language and platform I am most comfortable in for development.

    NodeJS is highly performant for spinning up dev servers and doing web development but it is highly performant for writing terminal applications and building packages. I could have used any other coding language like Python, C, Ruby ,or Java but I would have spent more time setting up the environment rather than focusing on the problem.

    By doing the development in Javascript on NodeJS, I was not only able to cut short development time but also catch some edge cases (e.g. hardwiring records to have lower limits than charge).

    Other considerations while choosing the stack were:

    -   Ability to minimize the code build
    -   code modularization
    -   have a simplistic model for anyone to read and understand the
    -   using minimum external libraries and dependencies. That is why I have not used Babel transpiler and used `require` and `module.exports` instead of `import` and `export`
    -   following OOP structure as well as modern JavaScript functional programming paradigms
    -   making each function independent for Test Driven Development (TDD)

-   ### How to install any required dependencies (runtimes, frameworks, etc)

    The project is bootstrapped with Modern JavaScript (ES6) with NodeJS.

    Please follow the [official guide](https://nodejs.org/en/docs/) to [download](https://nodejs.org/en/) NodeJS

    The NodeJS version I have used is `v12.18.4`

    Other libraries and packages:

    -   `npm` - Package manager for JavaScript programming. npm comes downloaded with NodeJS.
    -   `mocha` - JavaScript assertion test library
    -   `chai` - Javascript tetst framework

    The last two will be installed directly when you unzip and install the project. (The steps will be mentioned below)

-   ### How to build, package or compile your code if applicable

    -   NodeJS is a pre-requisite for this project.

        -   Confirm you have NodeJS by using the following command on the terminal

            ```
            $ node -v
            ```

            if you NodeJS installed, it will return `v12.18.4` or some similar number.

        -   Confirm you have npm installed.
            ```
            $ npm -v
            ```
            If you have npm installed, it will return `6.14.6` or some similar number

        If you do not have these, please [install NodeJS](https://nodejs.org/en/)

    -   Navigate to myprogram folder on terminal
        ```
        $ cd myprogram
        ```
    -   Please install all the dependencies by typing the following
        ```
        $ npm install
        ```

-   ### How to run your code and tests

    -   Now you are ready to run the code

        ```
        $ node ./index.js input.txt
        ```

        ===

    -   Test the application with other input

        -   edit `input.txt` and run the above command on the terminal.

    -   To run tests
        ```
        $ npm run test
        ```

## Folder Structure

-   `node_modules`: all the dependencies and libraries installed
    -   `src`: source folder
        -   `add.js`: function to add new users with limit and balance after doing luhn-10 check
        -   `charge.js`: function to identify the user from the ledger and add a charge to the balance
        -   `credit.js`: function to identify the user from the ledger and remove credit from the balance
        -   `creditCardProcessor.js`: function to identify single command and route to `add`, `charge`, `credit`. This function also does the post-processing of the final result in the **lexicographical** order
        -   `fileProcessing.js`: folder uses the inbuilt `fs` package to read the file from the terminal
        -   `luhn10check.js`: function to do the luhn-10 check and return `true` if the card passes the test, else return `false`. It also checks if the length of the card is more than 19 characters or less than 13 characters.
    -   `test`: all unit tests are in this folder
        -   `add.spec.js`
        -   `charge.spec.js`
        -   `credit.spec.js`
        -   `creditCardProcessor.spec.js`
        -   `luhn10check.spec.js`
    -   `index.js`: main function which reads the file name from `fileProcessing.js` and sends it to the `creditCardProcessor.js`
    -   `input.txt`: input text file
    -   `package-lock.json`: contains transitive dependencies for the project
    -   `package.json`: contains all the important information about the project like scripts, dependencies, dev-dependencies, versions, etc.


Thank you for reading the README.
