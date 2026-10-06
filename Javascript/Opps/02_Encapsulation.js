/// Modern way to make encapsulations

class Car{
    #speed=20;
    
    setspeed(speed){
        this.#speed=speed;
    }
    getspeed(){
        return this.#speed; 
    }
}

const car=new Car();
car.setspeed(100);
console.log(car.getspeed())

// old way to make

function BankAccount(owner,balance){
    let __balance=balance;   // private field
    
    this.getbalance= function(){
        return __balance;
    }
}

const acc=new BankAccount('Aakib Ali',20033);
console.log(acc.getbalance())
