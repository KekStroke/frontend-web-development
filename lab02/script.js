function Person(name) {
    this.name = name;
}

const personPrototype = {
    greet : function() {
        return "Hello, I'm $(this.name)";
    }
}
Person.prototype = personPrototype;
Person.prototype.constructor = Person;

john = Person('John');

const numbers = [2, 7, 2, 4, 3];