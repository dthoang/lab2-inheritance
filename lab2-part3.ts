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

class checkingAccount {
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

class generalAccount {
    
}


// Copy and paste your CheckingsAccount and SavingsAccount classes into your lab1-part3.ts file.

// At this point, you will probably have noticed that there is a bit of redundant code between your CheckingsAccount and SavingsAccount classes. For example, your deposit method is identical for both classes.

// So now you should create a general Account class with all of the default shared behavior that your CheckingsAccount and SavingsAccount classes should inherit.

// Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

// When you are done with this step, commit your changes to git for this file