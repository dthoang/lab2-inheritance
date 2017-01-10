class savingsAccount {
    private balance:number;
    private name:string;
    private withdrawls:number;

    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.name = ownerName;
        this.withdrawls = 0;
    }

    public deposit(amount:number) {
        this.balance += amount;
        console.log(`You have deposited $${amount}`)
        console.log(`Your balance is $${this.balance}`)
    }

    public withdraw(amount:number) {
        if (this.withdrawls > 2) {
            console.log(`You have already made 3 withdrawls today, you cannot make anymore.`)
        } else  {
            this.balance -= amount;
            console.log(`You have withdrew $${amount}`);
            console.log(`Your balance is $${this.balance}`)
            this.withdrawls++;
            console.log(`You have withdrew ${this.withdrawls} today`)
        }
    }

    public checkBalance() {
        console.log(`Your balance is $${this.balance}`)
    }
}

let userAccount:savingsAccount = new savingsAccount(1000,'Daniel Hoang');

userAccount.checkBalance();
userAccount.deposit(500);
userAccount.checkBalance();
userAccount.withdraw(700);
userAccount.withdraw(50);
userAccount.withdraw(50);
userAccount.withdraw(50);
userAccount.checkBalance();

// Step 3: Write a SavingsAccount class

// In lab1-part2.ts write a SavingsAccount class with the exact same functionality as your CheckingsAccount class (you can copy -> paste -> rename).

// The only thing that is different about your SavingsAccount class is that there should be a limit on the number of withdrawals you can make.

// Specifically, each instance of the SavingsAccount class should only be allowed to make 3 withdrawals. Any calls that exceed that limit should not perform the withdrawal and additionally should print out an error message for the user to see.

// Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

// When you are done with this step, commit your changes to git for this file