
//a
console.log("pattern A")
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

//b
console.log("pattern B")
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}


//c
console.log("pattern C")
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
    


 

//d
console.log("pattern D")
let count = 1;
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count;
        count++;
    }
    console.log(row);
}


//e
console.log("pattern E")
let count1 = 0;
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count1 % 2;
        count1++;
    }
    console.log(row);
}


//f
console.log("pattern F")
let count2 = 1;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count2 + ' ';
        count2++;
    }
    console.log(row);
}



//g
console.log("pattern G")
    for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 5; j >= 6 - i; j--) {
        row += j + ' ';
    }
    console.log(row);
}



//h
console.log("pattern H")
for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= 6 - i; j++) {
        row += i;
    }
    console.log(row);
}



//i
console.log("pattern I")
for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
    


//j
console.log("pattern J")
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 5; j >= i; j--) {
        row += i;
    }
    console.log(row);
}



//k
console.log("pattern K")
for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}



//l
console.log("pattern L")
for (let i = 5; i >= 1; i--) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += i;
    }
    console.log(line);
}

//m
console.log("pattern M")
for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 5; j > 5 - i; j--) {
        row += j;
    }
    console.log(row);
}
