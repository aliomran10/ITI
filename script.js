// task 1

class Polygon {
    constructor(numOfSides) {
        this.numOfSides = numOfSides;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(4);
        this.sideLength = sideLength;
    }

    toString() {
        console.log(`Square Area = ${this.sideLength ** 2} and its number of sides are ${this.numOfSides}`);
    }
}

class Rectangle extends Polygon {
    constructor(width, length) {
        super(4);
        this.width = width;
        this.length = length;
    }

    toString() {
        console.log(`Rectangle Area = ${this.width * this.length} and its number of sides are ${this.numOfSides}`);
    }
}

class Triangle extends Polygon {
    constructor(base, height) {
        super(3);
        this.base = base;
        this.height = height;
    }

    toString() {
        console.log(`Triangle Area = ${1 / 2 * this.base * this.height} and its number of sides are ${this.numOfSides}`);
    }
}

class Circle extends Polygon {
    constructor(radius) {
        super(0);
        this.radius = radius;
    }

    toString() {
        console.log(`Circle Area = ${Math.PI * this.radius ** 2} and its number of sides are ${this.numOfSides}`);
    }
}

let sq = new Square(4);
sq.toString();

let rec = new Rectangle(2, 4);
rec.toString();

let tri = new Triangle(4, 6);
tri.toString();

let cir = new Circle(3);
cir.toString();


// task 2

let myPromise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject("error");
            }
        }
    }

    xhr.send();
})

myPromise.then((data) => {
    let result = JSON.parse(data);
    console.log(result);
}).catch((error) => console.log(error));


//task 3

function* fib1(n) {
    let num1 = 0;
    let num2 = 1;

    for (let i = 0; i < n; i++) {
        yield num1;
        [num1, num2] = [num2, num1 + num2];
    }
}


function* fib2(n) {
    let num1 = 0;
    let num2 = 1;

    while (num1 <= n) {
        yield num1;
        [num1, num2] = [num2, num1 + num2];

    }
}



var generator = fib1(5);
for (var num of generator) {
    console.log(num);
}

generator = fib2(5);
for (var num of generator) {
    console.log(num);
}

