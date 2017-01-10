class bankAccount {
    private balance:number;
    private name:string;

    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.name = ownerName
    }

    public deposit(amount:number) {
        this.balance += amount;
        console.log(`You have deposited $${amount}`)
    }

    public withdraw(amount:number) {
        this.balance -= amount;
        console.log(`You have withdrew $${amount}`)
    }

    public checkBalance() {
        console.log(`Your balance is $${this.balance}`)
    }
}

let userAccount:bankAccount = new bankAccount(1000,'Daniel Hoang');

userAccount.checkBalance();
userAccount.deposit(500);
userAccount.checkBalance();
userAccount.withdraw(700);
userAccount.checkBalance();

// Write a TypeScript class in the lab1-part1.ts file that satisfies the following requirements:

// Has a constructor with the following parameters
// initialBalance (a number)
// ownerName (a string)
// Saves those parameters as private fields in your class
// Has a deposit method which takes a number amount as a parameter and adds it to your account's balance
// Has a withdraw method which takes a number amount as a parameter and subtracts it to your account's balance
// Has a checkBalance method which prints out the current balance of the account and the account owner's name (pro tip: ES6 template literals make this a bit cleaner)
// Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

// When you are done with this step, commit your changes to git for this file.