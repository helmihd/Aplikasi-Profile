class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }

    eat () {
        return "${this.name} sedang makan!";
    }
}