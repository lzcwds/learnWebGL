var Person1 = {
    name: '张三';
    age: 29;
}

var Person2 = {
    name: '李四';
    age: 28;
}

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };
    return o;
}
var person1 = createPerson('Nike', 29, 'teacher');
var person2 = createPerson('Arvin', 20, 'student');

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        alert(this.name);
    };
}
var person1 = new Person('Nike', 29, 'teacher');
var person2 = new Person('Arvin', 20, 'student');