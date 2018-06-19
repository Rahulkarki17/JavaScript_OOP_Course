
// This will return a string since it is a primitive
// const s1 = 'Hello';
// console.log(typeof s1);


// This will return an object
// const s2 = new String('Hello');
// console.log(typeof s2);


// DOM Objects 
// Window is a parent object so can just do alert();

//console.log(window);
//window.alert(1);


// console.log(navigator.appVersion);

// Object Literals 

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary()); 
console.log(Object.values(book2));
console.log(Object.keys(book2));