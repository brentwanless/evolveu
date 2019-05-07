console.log("Hello World");

class Living extends Object{
    constructor(age){       // can build anything in constructor
        super();
        this.age = age;
    }
    show(a) {               // show is a method
        console.log("from living, age => ", this.age, "a ", a);
    }
    birthday() {             //birthday is a method
        this.age ++;
    }
 }

class Animal extends Living {
    constructor(name, age){
        super(age);
        this.name = name;
    }
    show(z) {
        console.log("z first name and age =>", this.name, this.age);
    }
}

let j = new Living(3);
console.log("j = ", j);
console.log("age =>", j.age);
j.show("j first");
j.birthday();
j.show("j second");

let y = new Living(100);
y.birthday();
y.birthday();
y.show("y ");

j.show("j third");

let z = new Animal("spot", 5);

z.show("z");
 