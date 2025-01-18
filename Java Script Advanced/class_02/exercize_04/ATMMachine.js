let atmObject = {
    balance: 1500,
    getBalance: function(){
        alert(`Your current balance is ${this.balance}`)
        this.menu();
    }, 
    makeDeposit: function(deposit){
        if(isNaN(deposit) || deposit <= 0){
            alert("Error: Please enter a valid amount of money");
            this.menu();
        } else {
            this.balance += deposit;
            this.getBalance();
        }
    },
    makeWithdrawal: function(withdrawal){
        if(isNaN(withdrawal) || withdrawal <= 0){
            alert("Error: Please enter a valid amount of money");
            this.menu();
        } else if(withdrawal > this.balance){
            alert("Error: The amount you entered is higher that the balance");
            this.menu();
        } else {
            this.balance -= withdrawal;
            this.getBalance();
        }
    },
    exit: function(){
        let confirm = window.confirm("Click OK to close, Cancel to continue");
        if(confirm){
            window.close();
        } else {
            this.menu();
        }
    },
    menu:function(){
        let choice = parseInt(prompt("Select a choice: 1 -> get balance, 2-> make deposit, 3 -> withdrawal, 4 - exit"));
        if(choice == 1){
            this.getBalance();
        } else if(choice == 2){
            let deposit = parseFloat(prompt("How much money would you like to deposit?"));
            this.makeDeposit(deposit);
        } else if(choice == 3){
            let withdrawal = parseFloat(prompt("How much money would you like to withdraw?"));
            this.makeWithdrawal(withdrawal);
        } else if(choice == 4){
            this.exit();
        } else {
            this.error();
            
        }
    }
}

atmObject.menu();