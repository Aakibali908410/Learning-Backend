class Animal{
    speak(){
        console.log("Animal makes sounds");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Dog makes sounds")
    }
}

class cat extends Animal{
    speak(){
        console.log("Cat makes sounds");
    }
}

const Animal1=new Dog()
const Animal2=new cat()
const Animal3=new Animal()

Animal1.speak()
Animal3.speak()