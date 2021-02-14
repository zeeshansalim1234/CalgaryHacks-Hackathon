//var,let,const
console.log('Hello world');
let age=30;
age=19;
console.log(age);
const name="Zeeshan";
console.log(name);
let marks=99.5;
console.log(marks);
console.log(typeof marks);

//concatination 

console.log("My name is :"+name+" age : "+ age);

const s="My name is Zeeshan Salim Chougle";
console.log(s.split(' '));

//Arrays 

let fruits=["apple","banana"];
console.log(fruits);

fruits.push("mangos")
fruits.unshift("strawberries")
console.log(fruits);
const person={
    firstName : "Zeeshan",
    secondName : "Chougle",
    age : 19,
    hobbies: ["videogames","painting","sketching"]

}
console.log(person);
console.log(person.age);
console.log(person.hobbies[1]);

const todos = [
    {
        id: 2,
        Name: "Zeeshan",
        marks:100
    },
    {
        id:3,
        name: "amaan",
        marks:100
    }
];
console.log(todos[0].Name)

const todoJSON=JSON.stringify(todos)
console.log(todoJSON);

for(let i=0;i<10;i++)
{
    console.log(i+1);
}

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i]);
}

for(let i of todos)
{
    console.log(i);
}

todos.forEach(function(todo)
{
    console.log(todo.id);
});

const todoid=todos.map(function(i)
{
    return i.id;
});

console.log(todoid);

const todofiltered = todos.filter(function(todo){
    return todo.id===2;
}).map(function(todo){
    return todo.id;
});

console.log(todofiltered);

//functions 

function sum(num1 ,num2)
{
    return num1+num2;
}
let add=sum(2,3);
console.log(add);

function Info(firstName,lastName,dob)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
}

const info1=new Info("Zeeshan","Chougle","09-10-2001")

Info.prototype.getfullName = function()
{
    return this.firstName+" "+this.lastName;
}

console.info(info1.getfullName());


//Class

class Student
{
    constructor(firstName,lastName,marks)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.marks=marks;
    }

    getName()
    {
        return this.firstName+this.lastName;
    
    }

    getMarks()
    {
        return this.marks;
    }
}

const stud1= new Student(1,2,3);
console.log(stud1.getMarks());



class Me
{
    constructor(name,id,age,marks)
    {
        this.name=name;
        this.id=id;
        this.age=age;
        this.marks=marks;
    }
    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    setId(x)
    {
        this.id=x;
    }

}

const m1=new Me("Zeeshan",1,19,100);
m1.setId(10);
console.log(m1.getId());