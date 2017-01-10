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

let userAccount:checkingAccount = new checkingAccount(1000,'Daniel Hoang');

userAccount.checkBalance();
userAccount.deposit(500);
userAccount.checkBalance();
userAccount.withdraw(700);
userAccount.checkBalance();