class Animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }

    makesound(){
        console.log(`${this.name} makes ${this.sound} sound !`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name,'Barks');
        this.breed=breed;
    }
}

const dog=new Dog('Tommy-XXX','Husky-YYY');
dog.makesound()